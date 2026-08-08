import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/mail";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

function getString(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function hasAllowedExtension(filename: string) {
  const lower = filename.toLowerCase();
  return ALLOWED_EXT.some((ext) => lower.endsWith(ext));
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fields = {
    fullName: getString(form, "fullName"),
    email: getString(form, "email"),
    phone: getString(form, "phone"),
    country: getString(form, "country"),
    roles: getString(form, "roles"),
    objective: getString(form, "objective"),
    experience: getString(form, "experience"),
    skills: getString(form, "skills"),
    availability: getString(form, "availability"),
    device: getString(form, "device"),
    internet: getString(form, "internet"),
    consent: getString(form, "consent"),
  };

  const required = [
    "fullName",
    "email",
    "phone",
    "country",
    "roles",
    "objective",
    "experience",
    "device",
    "internet",
    "availability",
    "consent",
  ] as const;

  for (const key of required) {
    if (!fields[key]) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  if (fields.consent !== "yes") {
    return NextResponse.json(
      { error: "Please confirm consent before submitting." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resumeEntry = form.get("resume");
  let resume:
    | {
        filename: string;
        content: Buffer;
        contentType: string;
      }
    | undefined;

  if (resumeEntry && resumeEntry instanceof File && resumeEntry.size > 0) {
    if (resumeEntry.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 5MB or smaller." },
        { status: 400 }
      );
    }

    const filename = resumeEntry.name || "resume.pdf";
    const typeOk =
      ALLOWED_TYPES.has(resumeEntry.type) || hasAllowedExtension(filename);
    if (!typeOk) {
      return NextResponse.json(
        { error: "Resume must be a PDF, DOC, or DOCX file." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resumeEntry.arrayBuffer());
    resume = {
      filename,
      content: buffer,
      contentType: resumeEntry.type || "application/octet-stream",
    };
  }

  const reference = `APP-${Date.now().toString().slice(-8)}`;

  try {
    await sendApplicationEmail({
      reference,
      ...fields,
      resume,
    });
  } catch (err) {
    console.error("[application-email]", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Unable to send application email right now.",
      },
      { status: 500 }
    );
  }

  console.info("[application]", {
    reference,
    email: fields.email,
    fullName: fields.fullName,
    resume: resume?.filename || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, reference });
}
