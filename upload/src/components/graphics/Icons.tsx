type IconProps = { className?: string };

export function IconGuidance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" />
      <circle
        cx="24"
        cy="18"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M14 36c2.5-6 6.5-9 10-9s7.5 3 10 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M33 14l4 2-2 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSkills({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" />
      <rect
        x="12"
        y="14"
        width="24"
        height="18"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M18 38h12M24 32v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 22h6M18 26h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconOnboarding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M14 24h20M28 18l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="24" r="3" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}

export function IconService({ index, className }: IconProps & { index: number }) {
  const paths = [
    "M14 30c6-10 14-14 20-14",
    "M16 14h16v20H16z M20 18h8 M20 23h8 M20 28h5",
    "M15 30V18l9-5 9 5v12l-9 5z",
    "M14 24h20 M24 14v20",
    "M16 32l5-12 5 8 4-6 4 10",
    "M18 28a8 8 0 1 1 12 0 M24 18v2",
  ];

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" />
      <path
        d={paths[index % paths.length]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
