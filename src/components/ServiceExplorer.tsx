"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  {
    number: "01",
    title: "Remote-Work Readiness",
    text: "Guidance for beginners who want to understand remote work, online opportunities, work expectations, tools, and professional behavior.",
  },
  {
    number: "02",
    title: "Resume and Profile Support",
    text: "Resume, CV, LinkedIn, and online profile improvement to help applicants present themselves professionally.",
  },
  {
    number: "03",
    title: "Digital Skills Training",
    text: "Training in communication, online research, data handling, productivity tools, task quality, and basic remote-work systems.",
  },
  {
    number: "04",
    title: "Application Guidance",
    text: "Support with understanding application steps, requirements, onboarding instructions, and professional communication.",
  },
  {
    number: "05",
    title: "Assessment Preparation",
    text: "Practice-focused guidance to help applicants understand task instructions, quality expectations, and assessment readiness.",
  },
  {
    number: "06",
    title: "Recruitment Support",
    text: "Candidate screening, talent preparation, and connection support for businesses looking for trained remote-ready workers.",
  },
];

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <li key={service.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`flex w-full items-baseline gap-4 py-5 text-left transition-colors ${
                    isActive ? "bg-teal-soft/50" : "hover:bg-surface"
                  }`}
                >
                  <span
                    className={`w-10 shrink-0 pl-1 text-sm font-semibold ${
                      isActive ? "text-gold" : "text-muted"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`pr-2 font-serif text-lg md:text-xl ${
                      isActive ? "text-navy" : "text-navy/70"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <Reveal>
          <div className="sticky top-24 rounded-lg border border-border bg-surface p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                  Service {current.number}
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy">
                  {current.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {current.text}
                </p>
                <Link
                  href="/apply"
                  className="mt-8 inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
                >
                  Start Interest Form
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-lg bg-navy px-7 py-8 text-white md:flex-row md:items-center">
        <div>
          <p className="font-serif text-2xl">Need help choosing a service?</p>
          <p className="mt-2 text-sm text-white/70">
            Tell us what you need — we will guide you to the right preparation
            path.
          </p>
        </div>
        <Link
          href="/apply"
          className="inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
