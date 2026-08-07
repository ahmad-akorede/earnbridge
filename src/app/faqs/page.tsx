import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions for EarnBridge Careers job seekers and employers.",
};

const seekerFaqs = [
  {
    q: "Do you guarantee remote jobs or income?",
    a: "No. We provide preparation, guidance, and matching support. Outcomes depend on readiness, requirements, and market conditions.",
  },
  {
    q: "Who can apply?",
    a: "Job seekers, students, graduates, freelancers, and beginners interested in remote or digital work preparation.",
  },
  {
    q: "What information do you collect first?",
    a: "Basic contact details, goals, experience level, and readiness information. We do not ask for passwords or bank logins.",
  },
  {
    q: "Are the opportunities on the site live job listings?",
    a: "They are curated pathway examples. Introductions happen through EarnBridge’s guided process after review and preparation.",
  },
];

const employerFaqs = [
  {
    q: "How do you assess candidates?",
    a: "We review communication, digital readiness, role fit, and practical requirements before shortlisting.",
  },
  {
    q: "Can you provide a managed team?",
    a: "Yes. Share scope and standards and we can discuss coordinated coverage for support, operations, or related functions.",
  },
  {
    q: "How quickly will you respond?",
    a: "We aim to respond to employer requests within 24–48 business hours.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        description="Clear answers for candidates and employers before you apply or request talent."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">Job seekers</h2>
            <dl className="mt-6 space-y-6">
              {seekerFaqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-medium text-navy">{item.q}</dt>
                  <dd className="mt-2 text-sm text-muted">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Employers</h2>
            <dl className="mt-6 space-y-6">
              {employerFaqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-medium text-navy">{item.q}</dt>
                  <dd className="mt-2 text-sm text-muted">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Link href="/contact" className={`${primaryBtnClass} mt-12`}>
          Contact us
        </Link>
      </section>
    </>
  );
}
