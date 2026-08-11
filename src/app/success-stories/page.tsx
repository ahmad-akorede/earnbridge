import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { successStories } from "@/data/content";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Evidence-style success stories showing how EarnBridge Careers supports candidates and employers.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="Success stories"
        description="Sample journeys showing starting point, action, and result. Replace with verified client stories as permissions are added."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {successStories.map((story) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div className="flex items-center gap-4 border-b border-border bg-background/60 p-5">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={72}
                  height={72}
                  className="h-18 w-18 rounded-full object-cover"
                  style={{ width: 72, height: 72 }}
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                    {story.audience === "employer" ? "Employer" : "Candidate"}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-navy">
                    {story.name}
                  </h2>
                  <p className="text-sm font-medium text-navy/80">{story.role}</p>
                </div>
              </div>
              <div className="space-y-3 p-6 text-sm">
                <div>
                  <p className="font-medium text-navy">Starting point</p>
                  <p className="text-muted">{story.startingPoint}</p>
                </div>
                <div>
                  <p className="font-medium text-navy">Action</p>
                  <p className="text-muted">{story.action}</p>
                </div>
                <div>
                  <p className="font-medium text-navy">Result</p>
                  <p className="text-muted">{story.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/apply" className={`${primaryBtnClass} mt-10`}>
          Start your pathway
        </Link>
      </section>
    </>
  );
}
