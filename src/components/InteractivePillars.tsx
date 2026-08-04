"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  IconGuidance,
  IconOnboarding,
  IconSkills,
} from "@/components/graphics/Icons";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

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

export function InteractivePillars() {
  const reduce = useReducedMotion();

  return (
    <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
      {pillars.map((item) => {
        const Icon = item.icon;
        return (
          <StaggerItem key={item.title}>
            <motion.article
              className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(15,39,68,0.04)] transition-colors"
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, borderColor: "rgba(26,107,92,0.45)" }
              }
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <Icon className="relative h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" />
              <h3 className="relative mt-5 font-serif text-xl text-navy">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </motion.article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function MagneticButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
