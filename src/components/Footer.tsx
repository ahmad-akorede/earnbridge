import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/20 bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Career support, remote-work training, recruitment guidance, and
              digital skills development — delivered with clarity and honesty.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Site map
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/75">
              {footerLinks.map((link) => (
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
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/50">
            Disclaimer: EarnBridge Careers provides career support and training
            services. We do not guarantee employment, platform acceptance, or
            fixed income.
          </p>
          <p className="mt-3 text-xs text-white/40">
            © {new Date().getFullYear()} EarnBridge Careers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
