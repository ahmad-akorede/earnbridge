import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

export function BrandLogo({ className = "", priority, onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${className}`}
      onClick={onClick}
      aria-label="EarnBridge Careers home"
    >
      <Image
        src="/earnbridge-logo.png"
        alt="EarnBridge Careers"
        width={280}
        height={88}
        priority={priority}
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
