import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Career readiness, assessment, placement support, employer recruitment, and managed workforce services from EarnBridge Careers.",
};

const services = [
  {
    number: "01",
    title: "Remote-work readiness",
    text: "Guidance on expectations, tools, communication, confidentiality, and professional remote behaviour.",
  },
  {
    number: "02",
    title: "Career development support",
    text: "CV, LinkedIn, portfolio guidance, applications, interviews, and career planning.",
  },
  {
    number: "03",
    title: "Candidate assessment",
    text: "Screening for communication, digital literacy, reliability, and role-specific readiness.",
  },
  {
    number: "04",
    title: "Opportunity matching support",
    text: "Connecting prepared candidates with suitable employment, contract, freelance, or project pathways.",
  },
  {
    number: "05",
    title: "Employer recruitment",
    text: "Sourcing, assessing, shortlisting, and presenting candidates against a clear brief.",
  },
  {
    number: "06",
    title: "Managed workforce support",
    text: "Onboarding coordination, quality expectations, and support for assigned remote coverage.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services for candidates and employers"
        description="Preparation, assessment, matching support, and hiring help — without false employment guarantees."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <article key={s.number} className="grid gap-3 py-8 md:grid-cols-[5rem_1fr]">
              <p className="font-serif text-2xl text-teal">{s.number}</p>
              <div>
                <h2 className="font-serif text-2xl text-navy">{s.title}</h2>
                <p className="mt-3 max-w-3xl text-base text-muted">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/apply" className={primaryBtnClass}>
            Find Work
          </Link>
          <Link href="/hire" className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy">
            Hire Talent
          </Link>
        </div>
      </section>
    </>
  );
}
