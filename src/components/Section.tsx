// Layout primitives shared by every page section: consistent width,
// vertical rhythm and heading style. Keeps spacing decisions in one file.
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={`${tone === "surface" ? "bg-surface" : "bg-background"} border-b border-border/60 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2;
}) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Title className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</Title>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
