import { NextResponse } from "next/server";

type InterestPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  device?: string;
  interest?: string;
  support?: string;
};

export async function POST(request: Request) {
  let body: InterestPayload;

  try {
    body = (await request.json()) as InterestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const required = [
    "fullName",
    "email",
    "phone",
    "country",
    "device",
    "interest",
    "support",
  ] as const;

  for (const key of required) {
    if (!body[key]?.toString().trim()) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  const email = body.email!.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Lead capture endpoint ready for email/CRM integration.
  console.info("[interest]", {
    fullName: body.fullName!.trim(),
    email,
    phone: body.phone!.trim(),
    country: body.country!.trim(),
    device: body.device!.trim(),
    interest: body.interest!.trim(),
    support: body.support!.trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
