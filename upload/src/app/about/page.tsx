import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EarnBridge Careers — our mission, vision, and commitment to honest remote-work preparation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="We bridge ambition to opportunity."
        description="EarnBridge Careers is a career development and remote-work support company created to help people prepare for legitimate remote and online work opportunities."
        eyebrow="About us"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <h2 className="font-serif text-3xl text-navy">Our story</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>
              EarnBridge Careers supports job seekers, students, graduates,
              freelancers, and digital workers who want to improve their chances
              of succeeding in the remote-work economy. We provide career
              guidance, resume and profile improvement, digital skills training,
              remote-work readiness support, onboarding guidance, recruitment
              assistance, and professional development services.
            </p>
            <p>
              Our goal is simple: help people understand the remote-work space,
              avoid confusion, prepare professionally, and approach
              opportunities with confidence — with honesty, clear expectations,
              and respect for privacy and time.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Mission
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
              To help individuals become prepared, confident, and employable for
              remote and digital work opportunities through trusted guidance,
              training, and professional support.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Vision
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
              To become a trusted career support brand that helps thousands of
              people access remote-work readiness, digital skills, and
              sustainable career growth.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 border-t border-border pt-12 sm:grid-cols-3">
          {[
            {
              title: "Brand tone",
              text: "Professional, trustworthy, clear, supportive, and transparent.",
            },
            {
              title: "Audience",
              text: "Job seekers, students, graduates, freelancers, and online workers.",
            },
            {
              title: "Our promise",
              text: "Preparation and guidance — not guaranteed employment.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
