import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using EarnBridge Careers websites and career support services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Please read these terms before using EarnBridge Careers services."
        eyebrow="Legal"
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-8 text-base leading-relaxed text-muted">
          <div>
            <h2 className="font-serif text-2xl text-navy">Summary</h2>
            <p className="mt-3">
              Services are based on career support, training, and professional
              guidance. Results depend on applicant effort, platform
              requirements, market conditions, and individual readiness.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">No guarantees</h2>
            <p className="mt-3">
              EarnBridge Careers does not guarantee employment, fixed income,
              platform acceptance, or any specific outcome. We provide
              preparation and guidance only.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Service expectations</h2>
            <p className="mt-3">
              We communicate clearly and explain service expectations before any
              paid support. Applicants are encouraged to make informed decisions
              based on their goals and needs.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:support@earnbridgecareers.com"
                className="text-teal underline-offset-2 hover:underline"
              >
                support@earnbridgecareers.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
