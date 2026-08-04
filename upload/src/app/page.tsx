"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Disclaimer } from "@/components/Disclaimer";
import {
  IconGuidance,
  IconOnboarding,
  IconSkills,
} from "@/components/graphics/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Career Guidance",
    text: "Clear support for people who want to understand remote-work paths and application readiness.",
    icon: IconGuidance,
  },
  {
    title: "Digital Skills",
    text: "Practical training for online work, communication, research, and professional productivity.",
    icon: IconSkills,
  },
  {
    title: "Onboarding Support",
    text: "Step-by-step guidance to help applicants prepare without confusion or false promises.",
    icon: IconOnboarding,
  },
];

const trustPoints = [
  "No guaranteed jobs or income claims",
  "No passwords, bank details, or platform logins requested",
  "Clear expectations before any paid support",
];

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="border-b border-border bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              className="inline-flex rounded-lg bg-white p-2.5"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Image
                src="/earnbridge-logo.png"
                alt="EarnBridge Careers"
                width={360}
                height={112}
                priority
                className="h-12 w-auto sm:h-14 md:h-16"
              />
            </motion.div>

            <motion.h1
              className="mt-8 max-w-xl font-serif text-4xl leading-[1.15] tracking-tight md:text-5xl"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              Prepare for remote work with confidence.
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              Professional career support for job seekers, students, graduates,
              freelancers, and digital workers who want legitimate remote-work
              readiness — without exaggerated promises.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              <Link
                href="/apply"
                className="inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
              >
                Start Your Interest Form
              </Link>
              <Link
                href="/services"
                className="inline-flex rounded border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="rounded-lg border border-white/15 bg-white/[0.06] p-7"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Built on trust
            </p>
            <ul className="mt-5 space-y-4">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-white/85"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
              Preparation and guidance — not guaranteed employment.
            </p>
          </motion.aside>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 text-sm text-muted md:px-8">
          <span className="font-medium text-navy">Career Support</span>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span>Remote-Work Training</span>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span>Digital Skills</span>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span>Transparent Onboarding</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            What we do
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl">
            Bridging ambition to opportunity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            EarnBridge Careers helps people prepare professionally for remote
            and online work through guidance, profile support, digital skills,
            and clear onboarding — with honesty and respect for your time.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-0 border border-border md:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className={`bg-surface p-7 ${
                  index < pillars.length - 1 ? "md:border-r border-border" : ""
                } ${index < pillars.length - 1 ? "border-b md:border-b-0" : ""}`}
              >
                <Icon className="h-10 w-10 text-teal" />
                <h3 className="mt-5 font-serif text-xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.05} className="mt-12">
          <Disclaimer />
        </Reveal>
      </section>

      <section className="border-t border-border bg-teal-soft/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Ready to take the next step?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              Share your goals through our interest form. We respond within 24–48
              business hours.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex shrink-0 rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
          >
            Start Interest Form
          </Link>
        </div>
      </section>
    </>
  );
}
