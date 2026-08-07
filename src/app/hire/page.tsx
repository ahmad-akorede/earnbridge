import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Hire Talent",
  description:
    "Hire assessed, dependable remote talent through EarnBridge Careers recruitment and managed workforce support.",
};

export default function HirePage() {
  return (
    <>
      <PageHero
        eyebrow="Employers"
        title="Hire assessed, dependable talent"
        description="Tell us what you need. EarnBridge helps with sourcing, readiness checks, shortlisting, and optional managed-team coordination."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-12 grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/employer.jpg"
              alt="Hiring manager reviewing candidates"
              width={800}
              height={800}
              className="h-[280px] w-full object-cover md:h-[320px]"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Why employers work with us</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li>Candidates are guided and assessed before introduction.</li>
              <li>Clear briefs reduce unsuitable applications.</li>
              <li>Options for individual hires or managed team coverage.</li>
              <li>Transparent communication and defined next steps.</li>
            </ul>
            <div className="mt-8 space-y-3 text-sm">
              <p className="font-medium text-navy">Common role areas</p>
              <p className="text-muted">
                Customer support, administration, operations, research, social media
                support, sales support, and other digital functions.
              </p>
            </div>
            <Link href="/managed-teams" className={`${primaryBtnClass} mt-8`}>
              Explore managed teams
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
          <LeadForm endpoint="/api/employer" title="Employer request form" />
        </div>
      </section>
    </>
  );
}
