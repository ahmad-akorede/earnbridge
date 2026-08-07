"use client";

import { motion, useReducedMotion } from "motion/react";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({
  title,
  description,
  eyebrow = "EarnBridge Careers",
}: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
