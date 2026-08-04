export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`border-l-4 border-gold bg-gold-soft/60 px-5 py-4 text-sm leading-relaxed text-foreground ${className}`}
      role="note"
    >
      <p className="font-semibold text-navy">Important notice</p>
      <p className="mt-1.5 text-muted">
        EarnBridge Careers does not guarantee employment, fixed income, or
        acceptance into any platform. We provide career support, training, and
        preparation services only.
      </p>
    </aside>
  );
}
