// Hero background layer: gradient, image or video — controlled entirely by
// src/config/hero.ts. Video is muted, looping and inline (mobile-safe), and is
// skipped for visitors who prefer reduced motion.
import { useEffect, useState } from "react";
import { heroMedia } from "@/config/hero";

export function HeroMedia() {
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    setAllowVideo(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const filter = heroMedia.blur ? `blur(${heroMedia.blur}px)` : undefined;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Always-present brand wash */}
      <div className="absolute inset-x-0 -top-40 h-80 bg-primary-soft opacity-70 blur-3xl" />
      <div className="hero-orb absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div
        className="hero-orb absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl"
        style={{ animationDelay: "1.4s" }}
      />

      {heroMedia.kind === "image" && heroMedia.src ? (
        <img
          src={heroMedia.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: heroMedia.position, filter }}
          loading="eager"
        />
      ) : null}

      {heroMedia.kind === "video" && heroMedia.src && allowVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: heroMedia.position, filter }}
          src={heroMedia.src}
          poster={heroMedia.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}

      {heroMedia.kind === "video" && heroMedia.src && !allowVideo && heroMedia.poster ? (
        <img
          src={heroMedia.poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: heroMedia.position, filter }}
        />
      ) : null}

      {heroMedia.kind !== "gradient" && heroMedia.src ? (
        <div
          className="absolute inset-0 bg-background"
          style={{ opacity: heroMedia.overlay }}
        />
      ) : null}
    </div>
  );
}

/** True when a photo/video背 background is active — lets text switch weight. */
export const hasHeroMedia = heroMedia.kind !== "gradient" && Boolean(heroMedia.src);
