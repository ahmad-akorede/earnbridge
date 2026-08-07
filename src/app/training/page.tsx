import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Remote-work readiness and professional skills training programmes from EarnBridge Careers.",
};

const programmes = [
  {
    title: "Remote-Work Readiness",
    outcome: "Understand remote expectations, tools, communication, and professional conduct.",
    duration: "Short programme · cohort or guided",
    entry: "Beginners welcome",
  },
  {
    title: "Communication & Productivity",
    outcome: "Improve written communication, task quality, reporting, and time management.",
    duration: "Modular sessions",
    entry: "Basic digital access required",
  },
  {
    title: "Application & Assessment Prep",
    outcome: "Practice instructions, quality standards, and interview-ready presentation.",
    duration: "Focused preparation track",
    entry: "For applicants entering matching review",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Job seekers"
        title="Training programmes"
        description="Practical preparation tied to remote-work readiness — with clear outcomes and transparent expectations."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-12 overflow-hidden rounded-xl">
          <Image
            src="/images/learning.jpg"
            alt="People in a professional training session"
            width={1400}
            height={700}
            className="h-[240px] w-full object-cover md:h-[320px]"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {programmes.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-serif text-xl text-navy">{p.title}</h2>
              <p className="mt-3 text-sm text-muted">{p.outcome}</p>
              <p className="mt-4 text-xs text-muted">Duration: {p.duration}</p>
              <p className="mt-1 text-xs text-muted">Entry: {p.entry}</p>
              <p className="mt-4 text-xs font-medium text-teal">
                Pricing: contact for current fees & refund terms
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          Instructors and schedules are confirmed when a cohort opens. Training
          supports placement readiness and professional growth.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/apply" className={primaryBtnClass}>
            Apply / request training
          </Link>
          <Link href="/pricing" className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy">
            Pricing & fees
          </Link>
        </div>
      </section>
    </>
  );
}
