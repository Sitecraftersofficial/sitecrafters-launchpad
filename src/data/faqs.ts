// Frequently asked questions rendered in the FAQ accordion.
// Edit text here; `order` controls display order (lowest first).

export type Faq = { question: string; answer: string; order: number };

export const faqs: Faq[] = [
  {
    order: 1,
    question: "How does the monthly payment model work?",
    answer:
      "You choose a plan and pay a fixed monthly amount instead of one large upfront development bill. The monthly payment covers building the site and keeping it running, according to your plan and the SiteCrafters agreement.",
  },
  {
    order: 2,
    question: "Do I own my website?",
    answer:
      "On the Starter plan, once 12 months of payments are complete the website ownership arrangement is fulfilled according to the SiteCrafters agreement. Ownership terms for other plans are confirmed in writing before work begins.",
  },
  {
    order: 3,
    question: "What is included in the price?",
    answer:
      "Each plan lists exactly what it includes on the pricing section. Features differ between plans, so please check the plan you are considering rather than assuming everything is included.",
  },
  {
    order: 4,
    question: "Can I request changes after launch?",
    answer:
      "Yes. Change requests and improvements are handled according to your plan and agreement. You contact us directly by email or WhatsApp and we confirm what is covered.",
  },
  {
    order: 5,
    question: "Do you handle hosting?",
    answer:
      "Yes, hosting support is part of the plans. We set it up and keep the site online so you don't have to manage servers.",
  },
  {
    order: 6,
    question: "What about a domain name?",
    answer:
      "We help you choose and set up a domain. Domain registration fees charged by the registrar are confirmed with you beforehand.",
  },
  {
    order: 7,
    question: "Is SEO included?",
    answer:
      "Basic SEO setup — page titles, descriptions, clean structure and headings — is included. Larger plans include extended SEO setup. We don't promise specific rankings.",
  },
  {
    order: 8,
    question: "Can customers contact me on WhatsApp from the site?",
    answer:
      "Yes. We can add a WhatsApp button with a prefilled message so visitors reach you in one tap.",
  },
  {
    order: 9,
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can move to a larger plan as your business grows; we adjust the site and the monthly amount from the next billing cycle.",
  },
  {
    order: 10,
    question: "How do I get started?",
    answer:
      "Pick a plan and send the contact form, or message us on WhatsApp. We reply, ask for your business details, and start building.",
  },
];

export const sortedFaqs = [...faqs].sort((a, b) => a.order - b.order);
