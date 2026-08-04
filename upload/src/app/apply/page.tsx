import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { InterestForm } from "@/components/InterestForm";
import { JourneySteps } from "@/components/JourneySteps";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Submit your interest form for EarnBridge Careers support. We only collect basic contact and career readiness details.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="How it works"
        description="A transparent support process designed to help you prepare better, understand what is required, and approach online work professionally."
        eyebrow="Apply"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="font-serif text-2xl text-navy md:text-3xl">
            A clear path from interest to preparation
          </h2>
          <p className="mt-3 text-muted">
            Hover or select each step to follow the process. We explain
            expectations before any paid support begins.
          </p>
        </Reveal>

        <JourneySteps />

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <h2 className="font-serif text-3xl text-navy">Interest form</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Only basic details at this stage. Do not send ID documents, banking
              information, passwords, or platform logins through this form.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-teal" aria-hidden>
                  ✓
                </span>
                Name, email, phone, and country
              </li>
              <li className="flex gap-2">
                <span className="text-teal" aria-hidden>
                  ✓
                </span>
                Device access and work interests
              </li>
              <li className="flex gap-2">
                <span className="text-teal" aria-hidden>
                  ✓
                </span>
                A short note about the support you need
              </li>
            </ul>
            <Disclaimer className="mt-8" />
          </Reveal>
          <Reveal
            delay={0.06}
            className="rounded-lg border border-border bg-surface p-6 md:p-8"
          >
            <InterestForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
