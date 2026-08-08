import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Safety Centre",
  description:
    "How EarnBridge Careers approaches opportunity safety, scam prevention, and official communication channels.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Safety Centre"
        description="How EarnBridge verifies opportunities, communicates officially, and handles safety concerns."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-navy">Safety commitments</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Clear employer identity checks before introductions</li>
                <li>Transparent role requirements and communication standards</li>
                <li>Official website forms and @earnbridgecareers.com email only</li>
                <li>A simple way to report suspicious activity</li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-navy">Official channels</h2>
              <p className="mt-3 text-sm text-muted">
                Use forms on this website or email{" "}
                <a
                  href="mailto:support@earnbridgecareers.com"
                  className="font-medium text-teal hover:underline"
                >
                  support@earnbridgecareers.com
                </a>
                . Treat messages from unknown domains or pressure to pay quickly as
                suspicious.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-navy">Opportunity verification stance</h2>
              <p className="mt-3 text-sm text-muted">
                EarnBridge prioritises clear employer identity checks, transparent
                role requirements, and honest communication before introductions.
                Always confirm compensation and terms through official EarnBridge
                channels.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <LeadForm endpoint="/api/safety" title="Report a safety concern" />
          </div>
        </div>
      </section>
    </>
  );
}
