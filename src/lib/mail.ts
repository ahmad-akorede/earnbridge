import nodemailer from "nodemailer";
import { Resend } from "resend";

export type ApplicationMailPayload = {
  reference: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  roles: string;
  objective: string;
  experience: string;
  skills: string;
  availability: string;
  device: string;
  internet: string;
  resume?: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
};

function buildHtml(payload: ApplicationMailPayload) {
  const rows = [
    ["Reference", payload.reference],
    ["Full name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Country", payload.country],
    ["Preferred roles", payload.roles],
    ["Career objective", payload.objective],
    ["Experience", payload.experience],
    ["Skills", payload.skills || "—"],
    ["Availability", payload.availability],
    ["Device", payload.device],
    ["Internet", payload.internet],
    ["Resume", payload.resume ? payload.resume.filename : "Not attached"],
  ];

  return `
    <h2>New EarnBridge Careers application</h2>
    <p>A candidate submitted the Find Work application form.</p>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${label}</strong></td><td>${escapeHtml(
              String(value)
            )}</td></tr>`
        )
        .join("")}
    </table>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendApplicationEmail(payload: ApplicationMailPayload) {
  const to = process.env.APPLICATION_TO_EMAIL || "support@earnbridgecareers.com";
  const subject = `[EarnBridge Application] ${payload.reference} — ${payload.fullName}`;
  const html = buildHtml(payload);
  const text = [
    `New application ${payload.reference}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Country: ${payload.country}`,
    `Roles: ${payload.roles}`,
    `Objective: ${payload.objective}`,
    `Experience: ${payload.experience}`,
    `Skills: ${payload.skills || "—"}`,
    `Availability: ${payload.availability}`,
    `Device: ${payload.device}`,
    `Internet: ${payload.internet}`,
    `Resume: ${payload.resume?.filename || "Not attached"}`,
  ].join("\n");

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from =
      process.env.APPLICATION_FROM_EMAIL ||
      "EarnBridge Careers <onboarding@resend.dev>";

    const attachments = payload.resume
      ? [
          {
            filename: payload.resume.filename,
            content: payload.resume.content,
          },
        ]
      : undefined;

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject,
      html,
      text,
      attachments,
    });

    if (result.error) {
      throw new Error(result.error.message || "Resend failed to send email.");
    }
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from =
      process.env.APPLICATION_FROM_EMAIL ||
      process.env.SMTP_USER ||
      "noreply@earnbridgecareers.com";

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      html,
      text,
      attachments: payload.resume
        ? [
            {
              filename: payload.resume.filename,
              content: payload.resume.content,
              contentType: payload.resume.contentType,
            },
          ]
        : undefined,
    });
    return;
  }

  throw new Error(
    "Email is not configured. Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS."
  );
}
