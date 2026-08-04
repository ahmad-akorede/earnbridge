"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type FormState = "idle" | "submitting" | "success" | "error";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  device: "",
  interest: "",
  support: "",
};

export function InterestForm() {
  const [values, setValues] = useState(initial);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Unable to submit right now.");
      }

      setState("success");
      setValues(initial);
      setMessage(
        "Thank you. We received your interest form and will follow up within 24–48 business hours."
      );
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email support@earnbridgecareers.com."
      );
    }
  }

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  const fieldClass =
    "mt-1.5 w-full rounded border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/15";

  return (
    <AnimatePresence mode="wait">
      {state === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="rounded border border-teal/25 bg-teal-soft px-5 py-6"
        >
          <motion.div
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
            aria-hidden
          >
            ✓
          </motion.div>
          <p className="font-serif text-xl text-navy">Interest received</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{message}</p>
          <button
            type="button"
            className="mt-5 text-sm font-medium text-teal underline-offset-2 hover:underline"
            onClick={() => {
              setState("idle");
              setMessage("");
            }}
          >
            Submit another response
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          className="space-y-5"
          noValidate
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              Full name
              <input
                required
                name="fullName"
                autoComplete="name"
                value={values.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Email address
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Phone number
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Country
              <input
                required
                name="country"
                autoComplete="country-name"
                value={values.country}
                onChange={(e) => update("country", e.target.value)}
                className={fieldClass}
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-navy">
            Do you have a phone, laptop, or both?
            <select
              required
              name="device"
              value={values.device}
              onChange={(e) => update("device", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select an option</option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="both">Both</option>
            </select>
          </label>

          <label className="block text-sm font-medium text-navy">
            What type of remote work are you interested in?
            <input
              required
              name="interest"
              value={values.interest}
              onChange={(e) => update("interest", e.target.value)}
              placeholder="e.g. customer support, data entry, freelancing"
              className={fieldClass}
            />
          </label>

          <label className="block text-sm font-medium text-navy">
            Tell us what support you need
            <textarea
              required
              name="support"
              rows={4}
              value={values.support}
              onChange={(e) => update("support", e.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </label>

          <p className="text-sm leading-relaxed text-muted">
            Your information is used only to understand your career support needs
            and contact you about EarnBridge Careers services. We do not ask for
            passwords, bank details, SSN, or platform logins.
          </p>

          {state === "error" && (
            <p className="text-sm text-red-700" role="alert">
              {message}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-70"
            whileHover={{ scale: state === "submitting" ? 1 : 1.01 }}
            whileTap={{ scale: state === "submitting" ? 1 : 0.99 }}
          >
            {state === "submitting" ? "Submitting…" : "Submit Interest"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
