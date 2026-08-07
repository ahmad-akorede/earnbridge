"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/apply") || pathname.startsWith("/hire")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Link
          href="/apply"
          className="rounded bg-teal py-3 text-center text-sm font-semibold text-white"
        >
          Find Work
        </Link>
        <Link
          href="/hire"
          className="rounded border border-border py-3 text-center text-sm font-semibold text-navy"
        >
          Hire Talent
        </Link>
      </div>
    </div>
  );
}
