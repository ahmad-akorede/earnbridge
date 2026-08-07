import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { teamMembers } from "@/data/content";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "EarnBridge Careers prepares people for work, connects them with trusted opportunities, and helps employers access assessed talent.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your bridge to real remote work"
        description="EarnBridge Careers prepares people for legitimate digital work and helps businesses access assessed, dependable, professionally supported talent."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">Who we are</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                EarnBridge Careers is a career-development, recruitment, and
                remote-work support company. Unlike a conventional job board, we
                guide people through preparation, assessment, profile readiness,
                and matching support — while helping employers reduce hiring risk.
              </p>
              <p>
                Our promise focuses on preparation, genuine opportunity access,
                transparent expectations, and measurable growth.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/team-work.jpg"
              alt="EarnBridge team collaborating"
              width={900}
              height={700}
              className="h-[300px] w-full object-cover md:h-[360px]"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-2xl text-navy">People behind the work</h2>
          <p className="mt-2 text-sm text-muted">
            Sample team profiles for presentation — replace with your real team
            photos and titles when ready.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg border border-border bg-surface"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="font-serif text-lg text-navy">{member.name}</p>
                  <p className="mt-1 text-sm text-teal">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Mission
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
              To reduce unemployment and underemployment by preparing individuals
              for modern work, connecting them with legitimate opportunities, and
              providing the support they need to succeed.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Vision
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
              To become a trusted international bridge between talented people and
              meaningful digital-work opportunities.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-12 sm:grid-cols-3">
          {[
            ["Job seekers", "Graduates, beginners, freelancers, and professionals seeking better remote pathways."],
            ["Employers", "SMEs, startups, agencies, and teams outsourcing digital functions."],
            ["Partners", "Training organisations, schools, NGOs, and workforce programmes."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-serif text-xl text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-border bg-surface p-6">
          <h3 className="font-serif text-xl text-navy">Contact</h3>
          <p className="mt-2 text-sm text-muted">
            Official email:{" "}
            <a href="mailto:support@earnbridgecareers.com" className="text-teal hover:underline">
              support@earnbridgecareers.com
            </a>
          </p>
          <p className="mt-1 text-sm text-muted">Website: earnbridgecareers.com</p>
          <Link href="/contact" className={`${primaryBtnClass} mt-6`}>
            Contact routes
          </Link>
        </div>
      </section>
    </>
  );
}
