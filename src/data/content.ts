// Short, reusable copy blocks: "Why SiteCrafters", the build process, and about.
// Edit wording here instead of inside components.

export type ValueItem = { title: string; detail: string };

export const whySiteCrafters: ValueItem[] = [
  {
    title: "Affordable Monthly Model",
    detail:
      "Get online without starting with a large upfront website-development bill.",
  },
  {
    title: "Built Around Your Business",
    detail: "The website is designed around the actual business and its customers.",
  },
  {
    title: "Mobile-Friendly",
    detail: "The website works across phones, tablets and computers.",
  },
  {
    title: "Human Communication",
    detail: "You communicate directly with the people building your website.",
  },
  {
    title: "Ongoing Support",
    detail:
      "You have a clear way to request support and improvements according to your plan and agreement.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    detail:
      "You share your business name, services, products, prices, images, logo, contact details, location, social media and story.",
  },
  { number: "02", title: "We Build", detail: "SiteCrafters designs and develops the website." },
  { number: "03", title: "Review", detail: "You review the website and send feedback." },
  { number: "04", title: "Launch", detail: "The website is finalised and launched." },
];

export const howWeBuild: ValueItem[] = [
  { title: "Content first", detail: "We start from your real information, not a template filler." },
  { title: "Clear structure", detail: "Pages are organised so customers find what they need fast." },
  { title: "Fast pages", detail: "Optimised images, light code and no unnecessary effects." },
  { title: "Tested on real phones", detail: "We check the site on the devices your customers use." },
];

export const aboutContent = {
  heading: "About SiteCrafters",
  paragraphs: [
    "SiteCrafters exists to make professional websites more accessible to businesses. Many businesses in Rwanda are ready to be online but stop at the upfront cost of development.",
    "So we changed how it's paid for. You pay a fixed monthly amount, we design, build, host and support the website, and you get a professional online presence from month one.",
    "We're a small team based in Kigali. You talk to the people doing the work, and everything — pricing, ownership terms and what your plan covers — is written down before we start.",
  ],
};
