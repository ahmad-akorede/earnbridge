"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { opportunities, successStories } from "@/data/content";
import { ghostBtnClass, primaryBtnClass } from "@/lib/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const trustBar = [
  "Verified opportunity process",
  "Human support",
  "Clear process",
  "No hidden promises",
];

const seekerSteps = [
  "Explore roles & readiness",
  "Apply with basic details",
  "Assessment & preparation",
  "Matching support",
];

const employerSteps = [
  "Describe your hiring need",
  "We assess candidates",
  "Review a shortlist",
  "Hire or launch a team",
];

const services = [
  { title: "Career readiness", text: "Guidance, communication, and remote-work fundamentals." },
  { title: "Assessment", text: "Practical checks before introduction to opportunities." },
  { title: "Placement support", text: "Matching prepared candidates to suitable pathways." },
  { title: "Employer recruitment", text: "Sourcing and shortlisting assessed talent." },
  { title: "Managed teams", text: "Coordinated remote coverage for defined functions." },
];

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      <div className="border-b border-border bg-teal-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-2.5 text-xs font-medium text-navy md:px-8 md:text-sm">
          {trustBar.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-border bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              className="inline-flex rounded-lg bg-white p-2.5"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src="/earnbridge-logo.png"
                alt="EarnBridge Careers"
                width={360}
                height={112}
                priority
                className="h-12 w-auto sm:h-14"
              />
            </motion.div>
            <motion.h1
              className="mt-8 max-w-xl font-serif text-4xl leading-[1.15] tracking-tight md:text-5xl"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Build the skills. Find the opportunity. Grow your career.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              EarnBridge Careers prepares people for legitimate remote work and
              helps businesses hire assessed, dependable talent — with human
              support and transparent expectations.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link href="/apply" className={primaryBtnClass}>
                Find Work
              </Link>
              <Link href="/hire" className={ghostBtnClass}>
                Hire Talent
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/remote-work.jpg"
                alt="Professionals collaborating in a modern workspace"
                width={900}
                height={700}
                priority
                className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3">
              <div className="flex -space-x-3">
                {[
                  "/images/portrait-1.jpg",
                  "/images/portrait-2.jpg",
                  "/images/portrait-3.jpg",
                  "/images/employer.jpg",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-navy object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">
                Built for real people preparing for real remote work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          {[
            { label: "Preparation first", text: "Candidates are guided before introductions." },
            { label: "Two clear paths", text: "Find Work for seekers. Hire Talent for employers." },
            { label: "Safety-minded", text: "Clear process and official communication channels." },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-xl text-navy">{item.label}</p>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Clear paths for seekers and employers
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-serif text-2xl text-navy">Job seekers</h3>
            <ol className="mt-5 space-y-3">
              {seekerSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted">
                  <span className="font-semibold text-teal">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/apply" className={`${primaryBtnClass} mt-6`}>
              Start application
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-serif text-2xl text-navy">Employers</h3>
            <ol className="mt-5 space-y-3">
              {employerSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted">
                  <span className="font-semibold text-gold">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/hire" className={`${primaryBtnClass} mt-6`}>
              Request talent
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                Opportunities
              </p>
              <h2 className="mt-3 font-serif text-3xl text-navy">
                Featured role pathways
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Illustrative categories EarnBridge prepares people for. Matching
                happens through our guided process — not a self-serve job board.
              </p>
            </div>
            <Link href="/opportunities" className="text-sm font-semibold text-teal hover:underline">
              View all pathways →
            </Link>
          </div>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {opportunities.slice(0, 3).map((job) => (
              <StaggerItem
                key={job.id}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-teal">
                  {job.category}
                </p>
                <h3 className="mt-2 font-serif text-xl text-navy">{job.title}</h3>
                <p className="mt-2 text-sm text-muted">{job.summary}</p>
                <p className="mt-4 text-xs text-muted">{job.type}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy">
            Preparation, matching support, and hiring help
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <div key={s.title} className="border-t-2 border-teal pt-4">
              <h3 className="font-serif text-lg text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className={`${primaryBtnClass} mt-8`}>
          Explore services
        </Link>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/team-work.jpg"
              alt="Team collaborating around a table"
              width={900}
              height={700}
              className="h-[280px] w-full object-cover md:h-[340px]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              Human support
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy">
              Guidance before and after application
            </h2>
            <p className="mt-4 text-muted">
              EarnBridge combines preparation, assessment, and clear next steps
              so candidates and employers know what to expect.
            </p>
            <Link href="/how-it-works" className={`${primaryBtnClass} mt-6`}>
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy">Success stories</h2>
            <Link href="/success-stories" className="text-sm font-semibold text-teal hover:underline">
              Read more →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {successStories.slice(0, 3).map((story) => (
              <article key={story.id} className="rounded-lg border border-border p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-serif text-lg text-navy">{story.name}</p>
                    <p className="text-sm text-teal">{story.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">{story.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl md:text-3xl">
              Employers: describe your hiring need
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Tell us the role, skills, timing, and engagement type. We respond
              within 24–48 business hours.
            </p>
          </div>
          <Link href="/hire" className={primaryBtnClass}>
            Hire Talent
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/apply" className={primaryBtnClass}>
            Find Work
          </Link>
          <Link href="/safety" className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy">
            Safety Centre
          </Link>
        </div>
      </section>
    </>
  );
}
