// The single place the brand mark is rendered.
// Toggle siteConfig.showLogo to switch between image + wordmark and text-only.
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 ${className}`}
      aria-label={`${siteConfig.legalName} home`}
    >
      {siteConfig.showLogo && siteConfig.logo ? (
        <img
          src={siteConfig.logo}
          alt={siteConfig.logoAlt}
          height={siteConfig.logoHeight}
          style={{ height: siteConfig.logoHeight }}
          className="w-auto"
          loading="eager"
          decoding="async"
        />
      ) : (
        <span>{siteConfig.name}</span>
      )}
    </Link>
  );
}
