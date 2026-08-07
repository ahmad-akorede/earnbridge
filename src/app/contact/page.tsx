import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { primaryBtnClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EarnBridge Careers for job seeker support, employer hiring, partnerships, or safety reports.",
};

const routes = [
  {
    title: "Job seekers",
    text: "Applications, training interest, and readiness questions.",
    href: "/apply",
    cta: "Apply / Find Work",
    image: "/images/portrait-3.jpg",
  },
  {
    title: "Employers",
    text: "Hiring briefs, shortlists, and managed team requests.",
    href: "/hire",
    cta: "Hire Talent",
    image: "/images/employer.jpg",
  },
  {
    title: "Partners",
    text: "Schools, NGOs, training groups, and workforce programmes.",
    href: "/partners",
    cta: "Partner enquiry",
    image: "/images/learning.jpg",
  },
  {
    title: "Safety reports",
    text: "Report suspicious messages or safety concerns.",
    href: "/safety",
    cta: "Open Safety Centre",
    image: "/images/portrait-2.jpg",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Choose the right contact route"
        description="Use the path that matches your need so we can respond faster and more accurately."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {routes.map((route) => (
            <div
              key={route.title}
              className="overflow-hidden rounded-lg border border-border bg-surface"
            >
              <Image
                src={route.image}
                alt=""
                width={700}
                height={320}
                className="h-36 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-serif text-xl text-navy">{route.title}</h2>
                <p className="mt-2 text-sm text-muted">{route.text}</p>
                <Link href={route.href} className={`${primaryBtnClass} mt-5`}>
                  {route.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-navy">Direct email</h2>
          <a
            href="mailto:support@earnbridgecareers.com"
            className="mt-3 inline-block text-lg text-teal hover:underline"
          >
            support@earnbridgecareers.com
          </a>
          <p className="mt-3 text-sm text-muted">
            Response time: 24–48 business hours · Official domain only
          </p>
          <Link
            href="/faqs"
            className="mt-6 inline-flex text-sm font-semibold text-navy hover:underline"
          >
            Browse FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
