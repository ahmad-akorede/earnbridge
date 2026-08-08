"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "Do you guarantee remote jobs?",
    a: "No. EarnBridge Careers provides preparation, training, guidance, and support. We do not guarantee employment or income.",
  },
  {
    q: "Who can apply?",
    a: "Job seekers, students, graduates, freelancers, and beginners interested in remote or digital work preparation.",
  },
  {
    q: "What information do you collect?",
    a: "Only basic contact and interest details at the first stage.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="mt-8 divide-y divide-border border-y border-border">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="overflow-hidden bg-surface">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium text-navy">{item.q}</span>
              <motion.span
                className="text-gold"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                aria-hidden
              >
                +
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }
              className="overflow-hidden"
            >
              <p className="px-1 pb-5 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
