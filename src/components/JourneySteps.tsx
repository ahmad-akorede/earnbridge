"use client";

import { motion } from "motion/react";
import { useState } from "react";

const steps = [
  {
    title: "Submit interest",
    text: "Fill out a simple interest form with basic contact details and work goals.",
  },
  {
    title: "Readiness review",
    text: "We review your needs, experience level, tools, and support request.",
  },
  {
    title: "Support plan",
    text: "You receive guidance on the best preparation route, service, or training option.",
  },
  {
    title: "Preparation begins",
    text: "Resume, profile, digital skills, onboarding, and application readiness support begins.",
  },
  {
    title: "Progress support",
    text: "Follow-up support helps you stay organized, professional, and realistic.",
  },
];

export function JourneySteps() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-8 h-1 overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-gold"
          animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 160, damping: 26 }}
        />
      </div>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => {
          const isActive = active === index;
          return (
            <li key={step.title}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`h-full w-full border-t-2 px-1 py-4 text-left transition-colors ${
                  isActive
                    ? "border-gold bg-gold-soft/40"
                    : "border-border hover:border-teal/40"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    isActive ? "text-gold" : "text-muted"
                  }`}
                >
                  Step {index + 1}
                </p>
                <h2 className="mt-2 font-serif text-lg text-navy">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
