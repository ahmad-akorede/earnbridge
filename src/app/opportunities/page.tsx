import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { opportunities } from "@/data/content";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Explore remote role pathways EarnBridge Careers prepares candidates for through guided application and assessment.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Job seekers"
        title="Remote role pathways"
        description="These are curated pathway examples — not a live self-serve job board. EarnBridge introduces opportunities through preparation, assessment, and matching support."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 overflow-hidden rounded-xl">
          <Image
            src="/images/remote-work.jpg"
            alt="Professionals preparing for remote work opportunities"
            width={1400}
            height={600}
            className="h-[220px] w-full object-cover md:h-[280px]"
            priority
          />
        </div>
        <div className="mb-10 rounded-lg border border-gold/40 bg-gold-soft/50 px-5 py-4 text-sm text-muted">
          Status labels describe preparation and matching readiness. Compensation
          and exact employer details are confirmed during legitimate introductions
          — never through unofficial payment requests.
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {opportunities.map((job) => (
            <article
              key={job.id}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                {job.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-navy">{job.title}</h2>
              <p className="mt-3 text-sm text-muted">{job.summary}</p>
              <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted">Type</dt>
                  <dd className="text-navy">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-muted">Experience</dt>
                  <dd className="text-navy">{job.experience}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-muted">Eligibility</dt>
                  <dd className="text-navy">{job.eligibility}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-muted">Status</dt>
                  <dd className="font-medium text-teal">{job.status}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/apply" className={primaryBtnClass}>
            Apply for pathways
          </Link>
          <Link
            href="/assessment"
            className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy"
          >
            Take readiness assessment
          </Link>
        </div>
      </section>
    </>
  );
}
