// "8 hours vs 24 hours" comparison — the core problem SiteCrafters solves.
// Copy lives in src/data/content.ts (alwaysOpen).
import { Clock, Moon, PhoneOff, Search, ShoppingBag, Sun } from "lucide-react";
import { Reveal } from "./Reveal";
import { alwaysOpen } from "@/data/content";

const icons = { closed: PhoneOff, hours: Clock, night: Moon, day: Sun, search: Search, buy: ShoppingBag };

export function AlwaysOpen() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Reveal className="rounded-2xl border border-border bg-muted/60 p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {alwaysOpen.closedLabel}
        </p>
        <p className="mt-2 font-display text-4xl font-semibold text-foreground">
          {alwaysOpen.closedHours}
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          {alwaysOpen.without.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.text} className="flex gap-2.5">
                <Icon size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal
        delay={120}
        className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-7 shadow-lift"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {alwaysOpen.openLabel}
        </p>
        <p className="mt-2 font-display text-4xl font-semibold text-primary">
          {alwaysOpen.openHours}
          <span className="pulse-dot ml-3 inline-block h-2.5 w-2.5 rounded-full bg-primary align-middle" />
        </p>
        <ul className="mt-6 space-y-3 text-sm text-foreground">
          {alwaysOpen.with.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.text} className="flex gap-2.5">
                <Icon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
