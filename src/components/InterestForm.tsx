"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fieldClass, primaryBtnClass } from "@/lib/ui";

type FormState = "idle" | "submitting" | "success" | "error";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  roles: "",
  objective: "",
  experience: "",
  skills: "",
  availability: "",
  device: "",
  internet: "",
  consent: "",
};

const steps = [
  "Contact",
  "Goals",
  "Readiness",
  "Confirm",
];

export function InterestForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initial);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validateStep() {
    if (step === 0) {
      return Boolean(
        values.fullName.trim() &&
          values.email.trim() &&
          values.phone.trim() &&
          values.country.trim()
      );
    }
    if (step === 1) {
      return Boolean(values.roles.trim() && values.objective.trim() && values.experience.trim());
    }
    if (step === 2) {
      return Boolean(
        values.availability.trim() &&
          values.device.trim() &&
          values.internet.trim()
      );
    }
    return values.consent === "yes";
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateStep()) {
      setState("error");
      setMessage("Please complete the required fields on this step.");
      return;
    }
    if (step < steps.length - 1) {
      setState("idle");
      setMessage("");
      setStep((s) => s + 1);
      return;
    }

    setState("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
        reference?: string;
      } | null;
      if (!res.ok) throw new Error(data?.error || "Unable to submit right now.");
      setReference(data?.reference || "");
      setState("success");
      setValues(initial);
      setStep(0);
      setMessage(
        "Thank you. We received your application and will follow up within 24–48 business hours."
      );
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email support@earnbridgecareers.com."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded border border-teal/25 bg-teal-soft px-5 py-6">
        <p className="font-serif text-xl text-navy">Application received</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{message}</p>
        {reference && (
          <p className="mt-3 text-sm font-medium text-navy">
            Reference: {reference}
          </p>
        )}
        <button
          type="button"
          className="mt-5 text-sm font-medium text-teal underline-offset-2 hover:underline"
          onClick={() => {
            setState("idle");
            setMessage("");
            setReference("");
          }}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <div className="mb-2 flex justify-between text-xs font-medium text-muted">
          <span>
            Step {step + 1} of {steps.length}: {steps[step]}
          </span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-teal"
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 160, damping: 24 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {step === 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {(
                [
                  ["fullName", "Full name", "text"],
                  ["email", "Email address", "email"],
                  ["phone", "Phone number", "tel"],
                  ["country", "Country", "text"],
                ] as const
              ).map(([key, label, type]) => (
                <label key={key} className="block text-sm font-medium text-navy">
                  {label}
                  <input
                    required
                    type={type}
                    value={values[key]}
                    onChange={(e) => update(key, e.target.value)}
                    className={fieldClass}
                  />
                </label>
              ))}
            </div>
          )}

          {step === 1 && (
            <>
              <label className="block text-sm font-medium text-navy">
                Preferred role categories
                <input
                  required
                  value={values.roles}
                  onChange={(e) => update("roles", e.target.value)}
                  placeholder="e.g. customer support, data, admin"
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-medium text-navy">
                Career objective
                <textarea
                  required
                  rows={3}
                  value={values.objective}
                  onChange={(e) => update("objective", e.target.value)}
                  className={`${fieldClass} resize-y`}
                />
              </label>
              <label className="block text-sm font-medium text-navy">
                Experience level
                <select
                  required
                  value={values.experience}
                  onChange={(e) => update("experience", e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="some">Some experience</option>
                  <option value="experienced">Experienced</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-navy">
                Skills or tools (optional)
                <input
                  value={values.skills}
                  onChange={(e) => update("skills", e.target.value)}
                  className={fieldClass}
                />
              </label>
            </>
          )}

          {step === 2 && (
            <>
              <label className="block text-sm font-medium text-navy">
                Work availability
                <select
                  required
                  value={values.availability}
                  onChange={(e) => update("availability", e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="project">Project-based / freelance</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-navy">
                Device access
                <select
                  required
                  value={values.device}
                  onChange={(e) => update("device", e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option value="phone">Phone</option>
                  <option value="laptop">Laptop</option>
                  <option value="both">Both</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-navy">
                Internet readiness
                <select
                  required
                  value={values.internet}
                  onChange={(e) => update("internet", e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option value="stable">Stable connection</option>
                  <option value="moderate">Moderate / sometimes unstable</option>
                  <option value="limited">Limited access</option>
                </select>
              </label>
            </>
          )}

          {step === 3 && (
            <>
              <div className="rounded border border-border bg-background p-4 text-sm text-muted">
                <p>
                  <span className="font-medium text-navy">Name:</span>{" "}
                  {values.fullName}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-navy">Roles:</span>{" "}
                  {values.roles}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-navy">Availability:</span>{" "}
                  {values.availability}
                </p>
              </div>
              <label className="flex items-start gap-3 text-sm text-navy">
                <input
                  type="checkbox"
                  checked={values.consent === "yes"}
                  onChange={(e) =>
                    update("consent", e.target.checked ? "yes" : "")
                  }
                  className="mt-1"
                />
                <span>
                  I confirm this information is accurate. I understand EarnBridge
                  Careers does not guarantee employment or income, and will not
                  ask for passwords, bank logins, or unofficial processing fees.
                </span>
              </label>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {state === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {message}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {step > 0 && (
          <button
            type="button"
            className="rounded border border-border px-5 py-3 text-sm font-semibold text-navy"
            onClick={() => {
              setState("idle");
              setMessage("");
              setStep((s) => s - 1);
            }}
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={state === "submitting"}
          className={primaryBtnClass}
        >
          {state === "submitting"
            ? "Submitting…"
            : step === steps.length - 1
              ? "Submit application"
              : "Continue"}
        </button>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        We only collect information needed to understand your readiness and
        contact you. Official emails use @earnbridgecareers.com.
      </p>
    </form>
  );
}
