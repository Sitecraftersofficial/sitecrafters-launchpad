// Stores all SiteCrafters pricing information.
// Update this file to change prices, plan features or ownership terms.
// Add a plan by adding an object; remove one by deleting it.

export type Plan = {
  id: string;
  name: string;
  price: number; // numeric amount, formatted by the UI
  currency: string;
  period: string; // billing period label
  description: string;
  features: string[];
  recommended: boolean;
  /** Optional ownership arrangement shown prominently on the card. */
  ownership?: string;
  ctaText: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 16000,
    currency: "RWF",
    period: "month",
    description:
      "A clean, professional website for a business getting online for the first time.",
    features: [
      "Up to 4 pages",
      "Responsive, mobile-friendly design",
      "Contact form",
      "WhatsApp chat button",
      "Social media links",
      "Business information & location",
      "Domain and hosting support",
      "Basic SEO setup",
    ],
    recommended: false,
    ownership:
      "Complete 12 months of payments and the website ownership arrangement is fulfilled according to the SiteCrafters agreement.",
    ctaText: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: 25000,
    currency: "RWF",
    period: "month",
    description:
      "For businesses that need to present services, products and photos in more detail.",
    features: [
      "Up to 8 pages",
      "Everything in Starter",
      "Service & product sections",
      "Image galleries",
      "Maps / location integration",
      "Google presence support",
      "Monthly content updates as per agreement",
      "Priority email support",
    ],
    recommended: true,
    ctaText: "Get Started",
  },
  {
    id: "business",
    name: "Business",
    price: 40000,
    currency: "RWF",
    period: "month",
    description:
      "For established businesses that need a larger site and more regular changes.",
    features: [
      "Larger multi-page website",
      "Everything in Growth",
      "Advanced page structure & internal linking",
      "Booking or enquiry workflows",
      "Extended SEO setup",
      "Performance & analytics setup",
      "Ongoing improvements as per agreement",
      "Direct WhatsApp support line",
    ],
    recommended: false,
    ctaText: "Get Started",
  },
];

/** Formats a plan price, e.g. "16,000 RWF/month". */
export function formatPlanPrice(plan: Plan) {
  return `${plan.price.toLocaleString("en-US")} ${plan.currency}/${plan.period}`;
}

/** Cheapest plan — used for the "starting from" line in the hero. */
export function startingPrice() {
  const cheapest = [...plans].sort((a, b) => a.price - b.price)[0];
  return cheapest ? formatPlanPrice(cheapest) : "";
}

export function findPlan(id: string | undefined) {
  return plans.find((p) => p.id === id);
}
