import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How EarnBridge Careers uses information submitted through our website and interest form.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle information submitted through EarnBridge Careers."
        eyebrow="Legal"
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-8 text-base leading-relaxed text-muted">
          <div>
            <h2 className="font-serif text-2xl text-navy">Summary</h2>
            <p className="mt-3">
              EarnBridge Careers uses submitted information to contact
              applicants, understand support needs, provide career-related
              services, and improve service delivery. Personal information is
              not sold.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">
              Information we collect
            </h2>
            <p className="mt-3">
              Through our public interest form, we may collect your name, email
              address, phone number, country, device access, remote-work
              interests, and a short description of the support you need.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">
              Information use
            </h2>
            <p className="mt-3">
              We collect only the details needed to understand your support
              needs and contact you about EarnBridge Careers services through
              our public forms.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Contact</h2>
            <p className="mt-3">
              For privacy questions, email{" "}
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
