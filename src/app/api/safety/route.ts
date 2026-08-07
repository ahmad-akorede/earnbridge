import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const required = ["name", "email", "issueType", "description"];
  for (const key of required) {
    if (!body[key]?.toString().trim()) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const reference = `SAFE-${Date.now().toString().slice(-8)}`;
  console.info("[safety]", { ...body, reference, receivedAt: new Date().toISOString() });
  return NextResponse.json({ ok: true, reference });
}
