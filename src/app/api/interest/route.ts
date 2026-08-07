import { NextResponse } from "next/server";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  roles?: string;
  objective?: string;
  experience?: string;
  skills?: string;
  availability?: string;
  device?: string;
  internet?: string;
  consent?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const required: (keyof Payload)[] = [
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
  ];

  for (const key of required) {
    if (!body[key]?.toString().trim()) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  if (body.consent !== "yes") {
    return NextResponse.json(
      { error: "Please confirm consent before submitting." },
      { status: 400 }
    );
  }

  const email = body.email!.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const reference = `APP-${Date.now().toString().slice(-8)}`;
  console.info("[application]", {
    ...body,
    email,
    reference,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, reference });
}
