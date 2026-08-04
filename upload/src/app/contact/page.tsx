import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EarnBridge Careers about remote-work readiness, career support, or digital skills training.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact EarnBridge Careers"
        description="Have questions about remote-work readiness, career support, or digital skills training? Our team will guide you through the next step."
        eyebrow="Contact"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <dl className="space-y-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:support@earnbridgecareers.com"
                    className="text-lg text-navy underline-offset-4 hover:text-teal hover:underline"
                  >
                    support@earnbridgecareers.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Website
                </dt>
                <dd className="mt-2 text-lg text-navy">earnbridgecareers.com</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Business type
                </dt>
                <dd className="mt-2 text-base text-foreground">
                  Career development and remote-work support services
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Response time
                </dt>
                <dd className="mt-2 text-base text-foreground">
                  We aim to respond within 24–48 business hours.
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal
            delay={0.06}
            className="border border-border bg-surface p-8"
          >
            <h2 className="font-serif text-2xl text-navy">Prefer a form?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Use our interest form to share your goals and the support you
              need. We will follow up with next steps.
            </p>
            <Link
              href="/apply"
              className="mt-6 inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
            >
              Go to Interest Form
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-border pt-12">
          <h2 className="font-serif text-2xl text-navy md:text-3xl">
            Frequently asked questions
          </h2>
          <FaqAccordion />
        </Reveal>
      </section>
    </>
  );
}
