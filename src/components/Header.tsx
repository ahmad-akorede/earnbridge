"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { primaryBtnClass } from "@/lib/ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/hire", label: "Hire Talent" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <BrandLogo priority onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-0.5 text-sm tracking-wide transition-colors ${
                  active
                    ? "font-semibold text-navy"
                    : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/apply" className={primaryBtnClass}>
            Find Work
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden>
            <span
              className={`h-0.5 w-full rounded-full bg-navy transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-navy transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-navy transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="overflow-hidden border-t border-border bg-surface px-5 lg:hidden"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-base text-navy"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex flex-wrap gap-2 pt-2">
                <Link
                  href="/apply"
                  className={primaryBtnClass}
                  onClick={() => setOpen(false)}
                >
                  Find Work
                </Link>
                <Link
                  href="/hire"
                  className="inline-flex rounded border border-border px-5 py-3 text-sm font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  Hire Talent
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
