import type { Metadata } from "next";
import Image from "next/image";
import { AssessmentQuiz } from "@/components/AssessmentQuiz";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Career Assessment",
  description:
    "A short readiness assessment that recommends next steps for your remote-work pathway.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Job seekers"
        title="Career readiness assessment"
        description="Answer a few questions to get a recommended next step based on your goals and setup."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/portrait-1.jpg"
                alt="Professional preparing for a career assessment"
                width={700}
                height={800}
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              This short diagnostic helps you choose training, profile support, or
              application — it does not store an account or score in a database.
            </p>
          </div>
          <AssessmentQuiz />
        </div>
      </section>
    </>
  );
}
