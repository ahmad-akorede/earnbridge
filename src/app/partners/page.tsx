import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with EarnBridge Careers on training, workforce, and opportunity pathways.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partner with EarnBridge"
        description="Training organisations, schools, NGOs, communities, and workforce programmes can collaborate on readiness and opportunity pathways."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 overflow-hidden rounded-xl">
              <Image
                src="/images/learning.jpg"
                alt="Partners collaborating on workforce programmes"
                width={900}
                height={600}
                className="h-[220px] w-full object-cover md:h-[260px]"
              />
            </div>
            <h2 className="font-serif text-2xl text-navy">Partnership ideas</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Cohort readiness programmes for graduates or community groups</li>
              <li>Employer-linked training pathways</li>
              <li>Workshops on remote-work professionalism and safety</li>
              <li>Referral routes into EarnBridge preparation and matching support</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <LeadForm endpoint="/api/partner" title="Partnership enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
