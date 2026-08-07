import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Pricing & Fees",
  description:
    "Transparent guidance on EarnBridge Careers fees for candidates and employers. Contact us for current packages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Pricing & fees"
        description="Every fee, refund condition, and service inclusion should be clear before you pay, train, or accept work."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-2xl text-navy">For candidates</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Interest applications and basic guidance enquiries are free to start.</li>
              <li>Paid training or premium career-document services are optional and disclosed before payment.</li>
              <li>We do not charge unofficial “job guarantee” or “activation” fees.</li>
              <li>Refund terms are explained before any paid programme begins.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-2xl text-navy">For employers</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Recruitment, shortlisting, and placement support are employer-quoted.</li>
              <li>Managed workforce support may use monthly or project fees based on scope.</li>
              <li>Packages depend on role difficulty, volume, and support level.</li>
              <li>Commercial terms are confirmed in writing before work starts.</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          Current package pricing is provided on request so quotes match your
          needs. Email{" "}
          <a href="mailto:support@earnbridgecareers.com" className="text-teal hover:underline">
            support@earnbridgecareers.com
          </a>{" "}
          or use the relevant form.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={primaryBtnClass}>
            Contact for pricing
          </Link>
          <Link href="/hire" className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy">
            Employer enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
