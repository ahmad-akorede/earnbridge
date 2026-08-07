import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const required = [
    "contactName",
    "email",
    "company",
    "roleTitle",
    "engagement",
    "details",
  ];
  for (const key of required) {
    if (!body[key]?.toString().trim()) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  if (!isEmail(body.email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const reference = `EMP-${Date.now().toString().slice(-8)}`;
  console.info("[employer]", { ...body, reference, receivedAt: new Date().toISOString() });
  return NextResponse.json({ ok: true, reference });
}
