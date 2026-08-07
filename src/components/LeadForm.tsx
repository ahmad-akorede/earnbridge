"use client";

import { FormEvent, useState } from "react";
import { fieldClass, primaryBtnClass } from "@/lib/ui";

type Props = {
  endpoint: "/api/employer" | "/api/partner" | "/api/safety";
  title?: string;
};

export function LeadForm({ endpoint, title }: Props) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");
  const [values, setValues] = useState<Record<string, string>>({});

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
        reference?: string;
      } | null;
      if (!res.ok) throw new Error(data?.error || "Unable to submit.");
      setReference(data?.reference || "");
      setState("success");
      setValues({});
      setMessage("Thank you. We received your request and will respond within 24–48 business hours.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded border border-teal/25 bg-teal-soft p-6">
        {title && <p className="font-serif text-xl text-navy">{title}</p>}
        <p className="mt-2 text-sm text-muted">{message}</p>
        {reference && (
          <p className="mt-3 text-sm font-medium text-navy">Reference: {reference}</p>
        )}
      </div>
    );
  }

  const fields =
    endpoint === "/api/employer"
      ? [
          ["contactName", "Contact name", "text"],
          ["email", "Work email", "email"],
          ["company", "Company name", "text"],
          ["roleTitle", "Role / need title", "text"],
        ]
      : endpoint === "/api/partner"
        ? [
            ["organization", "Organisation", "text"],
            ["contactName", "Contact name", "text"],
            ["email", "Email", "email"],
            ["interest", "Partnership interest", "text"],
          ]
        : [
            ["name", "Your name", "text"],
            ["email", "Email", "email"],
            ["issueType", "Issue type", "text"],
          ];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {title && <h3 className="font-serif text-xl text-navy">{title}</h3>}
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(([key, label, type]) => (
          <label key={key} className="block text-sm font-medium text-navy">
            {label}
            <input
              required
              type={type}
              value={values[key] || ""}
              onChange={(e) => set(key, e.target.value)}
              className={fieldClass}
            />
          </label>
        ))}
      </div>

      {endpoint === "/api/employer" && (
        <>
          <label className="block text-sm font-medium text-navy">
            Engagement type
            <select
              required
              value={values.engagement || ""}
              onChange={(e) => set("engagement", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select</option>
              <option value="individual">Hire an individual</option>
              <option value="shortlist">Candidate shortlist</option>
              <option value="managed">Managed team</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-navy">
            Role details, skills, timing, and budget range
            <textarea
              required
              rows={4}
              value={values.details || ""}
              onChange={(e) => set("details", e.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </label>
        </>
      )}

      {endpoint === "/api/partner" && (
        <label className="block text-sm font-medium text-navy">
          Message
          <textarea
            required
            rows={4}
            value={values.message || ""}
            onChange={(e) => set("message", e.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </label>
      )}

      {endpoint === "/api/safety" && (
        <label className="block text-sm font-medium text-navy">
          Description / evidence summary
          <textarea
            required
            rows={4}
            value={values.description || ""}
            onChange={(e) => set("description", e.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </label>
      )}

      {state === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {message}
        </p>
      )}

      <button type="submit" disabled={state === "submitting"} className={primaryBtnClass}>
        {state === "submitting" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
