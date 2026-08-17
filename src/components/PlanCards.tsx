// Renders pricing cards from src/data/plans.ts.
// Clicking a CTA carries the selected plan to /contact via a search param,
// so visitors never have to retype which plan they want.
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { plans, formatPlanPrice, type Plan } from "@/data/plans";
import { trackEvent } from "@/config/analytics";

function PlanCard({ plan, index, compact }: { plan: Plan; index: number; compact?: boolean }) {
  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={`flex h-full flex-col rounded-xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${
        plan.recommended ? "border-primary" : "border-border"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
        {plan.recommended ? (
          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
            Most Popular
          </span>
        ) : null}
      </div>

      <p className="mt-4 font-display text-3xl font-semibold text-foreground">
        {plan.price.toLocaleString("en-US")}{" "}
        <span className="text-sm font-medium text-muted-foreground">
          {plan.currency}/{plan.period}
        </span>
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

      {!compact ? (
        <ul className="mt-5 space-y-2.5 text-sm text-foreground">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {plan.ownership ? (
        <p className="mt-5 rounded-lg bg-muted p-3 text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">Ownership: </strong>
          {plan.ownership}
        </p>
      ) : null}

      <div className="mt-6 pt-1 mt-auto">
        <Button
          asChild
          className="w-full"
          variant={plan.recommended ? "default" : "outline"}
          onClick={() =>
            trackEvent("pricing_cta_click", { plan: plan.id, price: plan.price })
          }
        >
          <Link to="/contact" search={{ plan: plan.id }}>
            {plan.ctaText}
          </Link>
        </Button>
      </div>
    </Reveal>
  );
}

export function PlanCards({ compact = false }: { compact?: boolean }) {
  if (plans.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        Pricing plans are being updated. Please contact us for current pricing.
      </p>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((plan, i) => (
        <PlanCard key={plan.id} plan={plan} index={i} compact={compact} />
      ))}
    </div>
  );
}

export { formatPlanPrice };
