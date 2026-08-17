// Central company + site configuration for SiteCrafters Ltd.
// Change company details, logo, contact info, social links and SEO defaults HERE.
// Nothing in the UI hardcodes these values.

export const siteConfig = {
  name: "SiteCrafters",
  legalName: "SiteCrafters Ltd.",
  tagline: "Your Business Deserves a Home Online.",
  description:
    "SiteCrafters builds professional websites for businesses in Rwanda through a simple monthly payment model.",

  // --- Logo ---------------------------------------------------------------
  // Set showLogo to false to use the text brand name only.
  // Replace `logo` with any image in /public or src/assets (imported URL).
  logo: "/logo.svg",
  showLogo: true,
  logoAlt: "SiteCrafters logo",
  logoHeight: 32, // px, used for header/footer sizing

  // --- Contact ------------------------------------------------------------
  email: "hello@sitecrafters.rw",
  phone: "+250 780 000 000",
  whatsapp: "250780000000", // digits only, international format
  location: "Kigali, Rwanda",

  // --- Social -------------------------------------------------------------
  // Remove any entry to hide it everywhere.
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],

  // --- SEO defaults -------------------------------------------------------
  seo: {
    titleSuffix: "SiteCrafters Ltd.",
    defaultTitle: "Website Development in Rwanda — SiteCrafters Ltd.",
    defaultDescription:
      "Affordable website development in Rwanda. Professional business websites from 16,000 RWF/month, built and supported by the SiteCrafters team in Kigali.",
    keywordsNote:
      "Content targets: website development Rwanda, website design Rwanda, business websites Rwanda.",
  },

  // --- Contact form -------------------------------------------------------
  contactForm: {
    // Where leads are delivered. Server-side secrets must live in env vars.
    deliveryMode: "server" as "server" | "email",
    minSubmitSeconds: 2, // basic spam protection: reject instant submissions
    successMessage:
      "Thank you — your request was received. We'll reply within one business day.",
  },
} as const;

/** Builds a WhatsApp chat URL with a prefilled message. */
export function whatsappLink(message?: string) {
  const text =
    message ??
    `Hello ${siteConfig.name}, I'm interested in getting a website.`;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
