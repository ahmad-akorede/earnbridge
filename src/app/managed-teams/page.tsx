import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Managed Teams",
  description:
    "Coordinate remote support, operations, sales, or social media coverage with EarnBridge managed team options.",
};

export default function ManagedTeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Employers"
        title="Managed remote teams"
        description="When you need coordinated coverage — not only a single hire — EarnBridge can help organise assessed talent around a clear scope."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-12 overflow-hidden rounded-xl">
          <Image
            src="/images/remote-work.jpg"
            alt="Distributed team collaborating remotely"
            width={1400}
            height={700}
            className="h-[240px] w-full object-cover md:h-[300px]"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Support pods", "Customer support or community coverage with reporting routines."],
            ["Operations coverage", "Data, admin, and process support for growing teams."],
            ["Growth support", "Sales follow-up or social media assistance under agreed standards."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-serif text-xl text-navy">{t}</h2>
              <p className="mt-3 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-2xl">
          <h2 className="font-serif text-2xl text-navy">How engagement works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
            <li>Share scope, hours, tools, and quality expectations.</li>
            <li>We prepare and align talent to the brief.</li>
            <li>Onboarding and communication standards are confirmed.</li>
            <li>Performance check-ins keep delivery accountable.</li>
          </ol>
          <Link href="/hire" className={`${primaryBtnClass} mt-8`}>
            Request a managed team
          </Link>
        </div>
      </section>
    </>
  );
}
