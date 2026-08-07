import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how EarnBridge Careers supports job seekers and employers through preparation, assessment, and matching support.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A guided pathway with clear next steps"
        description="EarnBridge helps candidates prepare and helps employers access assessed talent, with clear steps and honest expectations."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {[
            ["/images/portrait-1.jpg", "Candidates preparing for remote roles"],
            ["/images/remote-work.jpg", "Collaborative remote-ready professionals"],
            ["/images/employer.jpg", "Employers reviewing assessed talent"],
          ].map(([src, alt]) => (
            <div key={src} className="overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="h-44 w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">For job seekers</h2>
            <ol className="mt-6 space-y-5">
              {[
                ["Discover", "Learn what EarnBridge offers and which pathways fit your goals."],
                ["Explore", "Review role categories, training, or take a short readiness assessment."],
                ["Apply", "Submit a multi-step application with only the details we need."],
                ["Prepare", "Receive guidance on profiles, skills, and professional readiness."],
                ["Match support", "Qualified profiles may be considered for suitable introductions."],
                ["Grow", "Onboarding and progress support where placements happen."],
              ].map(([t, d], i) => (
                <li key={t} className="border-l-2 border-teal pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 font-serif text-xl text-navy">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <Link href="/apply" className={`${primaryBtnClass} mt-8`}>
              Find Work
            </Link>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">For employers</h2>
            <ol className="mt-6 space-y-5">
              {[
                ["Recognise the fit", "See the roles and support models EarnBridge can help with."],
                ["Build confidence", "Review process, safety standards, and service options."],
                ["Describe the need", "Share role, skills, timing, budget range, and engagement type."],
                ["Receive a shortlist", "Review assessed candidates with clear profile information."],
                ["Hire or launch", "Confirm expectations for individual hires or managed teams."],
                ["Repeat", "Continue hiring with a familiar, supported process."],
              ].map(([t, d], i) => (
                <li key={t} className="border-l-2 border-gold pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 font-serif text-xl text-navy">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <Link href="/hire" className={`${primaryBtnClass} mt-8`}>
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
