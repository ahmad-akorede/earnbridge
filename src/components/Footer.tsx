import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/opportunities", label: "Opportunities" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/services", label: "Services" },
      { href: "/training", label: "Training" },
      { href: "/assessment", label: "Career Assessment" },
    ],
  },
  {
    title: "For employers",
    links: [
      { href: "/hire", label: "Hire Talent" },
      { href: "/managed-teams", label: "Managed Teams" },
      { href: "/partners", label: "Partner With Us" },
      { href: "/success-stories", label: "Success Stories" },
    ],
  },
  {
    title: "Trust & help",
    links: [
      { href: "/safety", label: "Safety Centre" },
      { href: "/pricing", label: "Pricing & Fees" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/20 bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex rounded bg-white p-2"
              aria-label="EarnBridge Careers home"
            >
              <Image
                src="/earnbridge-logo.png"
                alt="EarnBridge Careers"
                width={280}
                height={88}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              EarnBridge Careers prepares people for legitimate remote work and
              helps businesses hire assessed, dependable talent — with human
              support and transparent expectations.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Official email:{" "}
              <a
                href="mailto:support@earnbridgecareers.com"
                className="text-gold hover:underline"
              >
                support@earnbridgecareers.com
              </a>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} EarnBridge Careers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
