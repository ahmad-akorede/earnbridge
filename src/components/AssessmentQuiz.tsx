"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { primaryBtnClass, secondaryBtnClass } from "@/lib/ui";

const questions = [
  {
    id: "goal",
    prompt: "What is your main goal right now?",
    options: [
      { label: "Find remote work soon", score: "apply" },
      { label: "Improve my readiness first", score: "train" },
      { label: "Strengthen my CV / profile", score: "profile" },
      { label: "Not sure yet", score: "assess" },
    ],
  },
  {
    id: "experience",
    prompt: "How much remote or digital work experience do you have?",
    options: [
      { label: "None yet", score: "train" },
      { label: "Some informal experience", score: "profile" },
      { label: "Professional experience", score: "apply" },
    ],
  },
  {
    id: "tools",
    prompt: "Which best describes your setup?",
    options: [
      { label: "Phone only", score: "train" },
      { label: "Laptop with limited internet", score: "profile" },
      { label: "Laptop with stable internet", score: "apply" },
    ],
  },
  {
    id: "confidence",
    prompt: "How confident are you with professional communication online?",
    options: [
      { label: "I need practice", score: "train" },
      { label: "I can manage with guidance", score: "profile" },
      { label: "I am confident", score: "apply" },
    ],
  },
];

const results: Record<
  string,
  { title: string; text: string; href: string; cta: string }
> = {
  train: {
    title: "Start with readiness training",
    text: "Focus on remote-work basics, communication, and professional habits before applying widely.",
    href: "/training",
    cta: "View training",
  },
  profile: {
    title: "Strengthen your professional profile",
    text: "Improve your CV, LinkedIn, and presentation so opportunities can assess you clearly.",
    href: "/services",
    cta: "See profile support",
  },
  apply: {
    title: "You appear ready to apply",
    text: "Submit an interest application so we can review your readiness and suitable pathways.",
    href: "/apply",
    cta: "Start application",
  },
  assess: {
    title: "Explore the process first",
    text: "Learn how EarnBridge works, then choose training or application with clearer expectations.",
    href: "/how-it-works",
    cta: "See how it works",
  },
};

export function AssessmentQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = answers.length === questions.length;

  const resultKey = useMemo(() => {
    if (!done) return "";
    const counts: Record<string, number> = {};
    for (const a of answers) counts[a] = (counts[a] || 0) + 1;
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }, [answers, done]);

  if (done) {
    const result = results[resultKey] || results.assess;
    return (
      <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          Recommended next step
        </p>
        <h2 className="mt-3 font-serif text-2xl text-navy">{result.title}</h2>
        <p className="mt-3 text-muted">{result.text}</p>
        <p className="mt-4 text-sm text-muted">
          This is guidance only — not a guarantee of placement or income.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={result.href} className={primaryBtnClass}>
            {result.cta}
          </Link>
          <button
            type="button"
            className={secondaryBtnClass}
            onClick={() => {
              setAnswers([]);
              setIndex(0);
            }}
          >
            Retake
          </button>
        </div>
      </div>
    );
  }

  const q = questions[index];

  return (
    <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
      <p className="text-sm text-muted">
        Question {index + 1} of {questions.length}
      </p>
      <h2 className="mt-3 font-serif text-2xl text-navy">{q.prompt}</h2>
      <div className="mt-6 space-y-3">
        {q.options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            className="block w-full rounded border border-border px-4 py-3 text-left text-sm text-navy transition hover:border-teal hover:bg-teal-soft"
            onClick={() => {
              setAnswers((prev) => [...prev, opt.score]);
              setIndex((i) => i + 1);
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
