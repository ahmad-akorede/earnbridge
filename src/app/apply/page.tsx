import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InterestForm } from "@/components/InterestForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to EarnBridge Careers with a multi-step interest form.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Work"
        title="Start your application"
        description="A clear multi-step form for job seekers. We only ask for information needed to understand your readiness and goals."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 overflow-hidden rounded-xl">
              <Image
                src="/images/portrait-2.jpg"
                alt="Applicant preparing for remote work"
                width={700}
                height={700}
                className="h-[220px] w-full object-cover"
              />
            </div>
            <h2 className="font-serif text-2xl text-navy">Before you begin</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Have a reliable email and phone number ready.</li>
              <li>Be honest about experience and equipment access.</li>
              <li>Prepare a resume in PDF, DOC, or DOCX (max 5MB).</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Prefer to check readiness first?{" "}
              <Link href="/assessment" className="font-medium text-teal hover:underline">
                Take the career assessment
              </Link>
              .
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <InterestForm />
          </div>
        </div>
      </section>
    </>
  );
}
