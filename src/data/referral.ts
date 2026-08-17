// Referral Partner Program terms. Edit commission amounts and rules here.

export const referralConfig = {
  title: "Become a SiteCrafters Partner",
  intro:
    "If you know a business that needs a website, refer them to us. When they become a paying customer, you're compensated.",
  upfrontCommission: "15,000 RWF",
  recurringCommission: "5%",
  commissionDuration: "up to 12 months",

  steps: [
    { title: "Find a business", detail: "Identify a business that needs a website." },
    { title: "Submit the referral", detail: "Send us the business name and contact details." },
    { title: "We contact them", detail: "SiteCrafters reaches out and explains the plans." },
    { title: "They become a customer", detail: "The business signs up on a monthly plan." },
    { title: "You get paid", detail: "You receive the applicable referral compensation." },
  ],

  eligibility: [
    "Open to individuals and businesses in Rwanda.",
    "You must not be an active SiteCrafters employee.",
    "No fee, no purchase and no recruitment is required to take part.",
  ],
  validReferralRules: [
    "The referral must be submitted before we have contacted the business.",
    "The business must be a new SiteCrafters customer.",
    "Contact details must be accurate and shared with the business's knowledge.",
  ],
  duplicateRules: [
    "If two partners refer the same business, the first submission counts.",
    "Businesses already in our pipeline are not eligible.",
  ],
  commissionTiming: [
    "Upfront commission is due after the customer's first successful monthly payment.",
    "Recurring commission applies to each subsequent monthly payment, for up to 12 months.",
  ],
  paymentRules: [
    "Payments are made by mobile money or bank transfer.",
    "Commissions are paid monthly, within 10 days of the customer's payment.",
    "Commission stops if the customer cancels their plan.",
  ],
} as const;
