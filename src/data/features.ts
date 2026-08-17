// Website capabilities, mapped to the plans that include them.
// `plans` holds plan ids from src/data/plans.ts — keep them in sync.

export type Feature = { name: string; description: string; plans: string[] };

export const features: Feature[] = [
  { name: "Responsive design", description: "Looks right on any screen size.", plans: ["starter", "growth", "business"] },
  { name: "Mobile optimization", description: "Built for phones first, where most visitors are.", plans: ["starter", "growth", "business"] },
  { name: "Contact forms", description: "Enquiries land in your inbox.", plans: ["starter", "growth", "business"] },
  { name: "WhatsApp integration", description: "One-tap chat with a prefilled message.", plans: ["starter", "growth", "business"] },
  { name: "Social media links", description: "Send visitors to your active channels.", plans: ["starter", "growth", "business"] },
  { name: "Business information", description: "Hours, address and what you do, clearly.", plans: ["starter", "growth", "business"] },
  { name: "Domain support", description: "We help register and connect your domain.", plans: ["starter", "growth", "business"] },
  { name: "Hosting support", description: "We keep the site online and updated.", plans: ["starter", "growth", "business"] },
  { name: "Basic SEO setup", description: "Titles, descriptions and clean structure.", plans: ["starter", "growth", "business"] },
  { name: "Image galleries", description: "Show your work, space or products.", plans: ["growth", "business"] },
  { name: "Service sections", description: "Explain each service on its own block.", plans: ["growth", "business"] },
  { name: "Product sections", description: "Present products with prices and photos.", plans: ["growth", "business"] },
  { name: "Maps / location", description: "Help customers find your place.", plans: ["growth", "business"] },
  { name: "Google presence support", description: "Guidance on your Google Business profile.", plans: ["growth", "business"] },
  { name: "Extended SEO setup", description: "Deeper structure, internal links, metadata.", plans: ["business"] },
  { name: "Analytics setup", description: "See how visitors use your website.", plans: ["business"] },
];
