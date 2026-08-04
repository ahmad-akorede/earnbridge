import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceExplorer } from "@/components/ServiceExplorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Remote-work readiness, resume support, digital skills training, application guidance, assessment preparation, and recruitment support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Professional services"
        description="Clear support, training, and readiness — without false employment promises. EarnBridge Careers focuses on preparation you can use."
        eyebrow="Services"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ServiceExplorer />
      </section>
    </>
  );
}
