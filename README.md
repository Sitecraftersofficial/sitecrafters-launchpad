# SiteCrafters Launchpad

Build the SiteCrafters Ltd. Website

Create a clean, modern, professional, production-ready website for SiteCrafters Ltd., a Rwanda-based website development company helping businesses build a professional online presence through simple monthly pricing.

The site must feel like it was built by a real professional web agency, not generated from a generic AI template.

The most important goals are:

Clear offer → Clear pricing → Real work → Real people → Easy contact

Do not overcomplicate the design or the code.

1. Brand & Design

Use a white-first design with refined blue/bluish accents.

The overall feeling should be:

Clean

Professional

Modern

Trustworthy

Human

Premium but approachable

Fast and easy to understand

Avoid:

Excessive gradients

Glassmorphism

Huge text everywhere

Excessive rounded cards

Heavy shadows

Generic stock photos

Fake statistics

Fake testimonials

Fake client logos

Overly futuristic effects

Unnecessary sections

Excessive animations

Use strong typography, good spacing, clean cards, and intentional whitespace.

Subtle motion

Add smooth, subtle animations that make the site feel alive without distracting the visitor.

Examples:

Gentle fade/slide-in when sections enter the viewport

Small hover movement on buttons and cards

Smooth navigation transitions

Subtle image reveals

Soft transitions between interactive states

Animations must be:

Fast

Smooth

Minimal

Professional

Accessible

Do not make the website constantly moving.

2. Make the Code Extremely Easy to Edit

This is a major requirement.

The website should be easy for a developer to maintain and update later.

Do not scatter important information throughout the code.

Create clear, centralized editable data/configuration for:

Company Information

Company name

Logo

Email

Phone

WhatsApp

Location

Social links

Description

Pricing

Plan name

Price

Billing period

Description

Features

Recommended status

Ownership terms

CTA text

Portfolio

Project name

Business name

Industry

Description

Image

Website URL

Date

Featured status

Team

Name

Role

Photo

Bio

Social link

FAQ

Question

Answer

Display order

Referral Program

Upfront commission

Recurring commission

Commission duration

Eligibility rules

Payment rules

Site Settings

Analytics ID

Contact form configuration

WhatsApp number

Social links

SEO defaults

A developer should be able to change these values from a small number of obvious files without hunting through dozens of components.

3. Explain the Code

Write clean, understandable code.

For every important component or configuration file, add a short comment explaining what it does.

Comments should explain purpose, not repeat obvious code.

For example:

// Stores all SiteCrafters pricing information.
// Update this file to change prices or plan features.


Use clear names such as:

siteConfig

plans

projects

teamMembers

faqs

referralConfig

Avoid confusing variable names and unnecessary abstraction.

Keep components modular and reusable.

Do not duplicate the same UI code unnecessarily.

4. Logos Must Be Easy to Remove or Replace

The SiteCrafters logo must come from one centralized configuration/location.

Make it extremely easy to:

Replace the logo

Remove the logo

Use a text-only brand name

Change the logo image

Change the logo size

If the logo is removed, the header and footer must still look correct.

Do not hardcode the logo into multiple unrelated components.

Example:

export const siteConfig = {
  logo: "/assets/logo.svg",
  showLogo: true,
}


The exact implementation can differ, but the principle is mandatory.

5. Portfolio Must Be Extremely Easy to Manage

The portfolio must be data-driven.

Do not manually duplicate portfolio cards throughout the website.

Store projects in one structured collection.

Example:

{
  name: "Project Name",
  category: "Real Estate",
  description: "Short project description",
  image: "/portfolio/project.jpg",
  websiteUrl: "https://example.com",
  featured: true,
  createdAt: "2026-08-01"
}


The system should automatically:

Display projects

Sort newest projects first

Highlight featured projects

Generate portfolio cards

Generate project pages when applicable

To add a portfolio project, the developer should ideally only need to add one object and one image.

To remove a project, they should only need to remove or disable that object.

Do not require redesigning the page.

Use placeholders such as:

[ADD PROJECT]

until real client information is provided.

Never invent clients or project results.

6. Navigation

Create a simple header with:

SiteCrafters

Navigation:

Home

Plans

Our Work

Team

How It Works

Referral Partner

Contact

Primary button:

Get Your Website

On mobile, use a clean menu.

The header may become sticky while scrolling, with a subtle transition.

7. Hero Section

Headline:

Your Business Deserves a Home Online.

Supporting text:

SiteCrafters builds professional websites for businesses through a simple monthly payment model, making it easier to establish a strong online presence without a large upfront cost.

Buttons:

View Plans

See Our Work

Supporting text:

Starting from 16,000 RWF/month

Keep the hero concise.

Do not make it consume the entire screen.

8. Pricing

Pricing is one of the most important parts of the website.

Show pricing early.

Headline:

Simple Pricing. Professional Websites.

Create three plans:

Starter

16,000 RWF/month

Growth

25,000 RWF/month

Mark:

Most Popular

Business

40,000 RWF/month

Each card should use the centralized pricing data.

Display:

Price

Billing period

Description

Features

Ownership information where applicable

CTA

For Starter, clearly state the 12-month ownership arrangement:

Complete 12 months of payments and the website ownership arrangement is fulfilled according to the SiteCrafters agreement.

Do not make promises beyond the actual agreement.

Do not hide important pricing conditions in tiny text.

9. Plan Selection

When a visitor clicks Get Started, automatically carry their selected plan into the contact form.

Example:

Selected Plan: Starter — 16,000 RWF/month

Do not make visitors type the plan again.

Preserve:

Selected plan

Referral partner information when applicable

Lead source when possible

10. Why SiteCrafters

Create a concise section explaining the practical benefits.

Use areas such as:

Affordable Monthly Model

Get online without starting with a large upfront website-development bill.

Built Around Your Business

The website is designed around the actual business and its customers.

Mobile-Friendly

The website works across phones, tablets, and computers.

Human Communication

Customers communicate directly with the people building their website.

Ongoing Support

Customers have a clear way to request support and improvements according to their plan and agreement.

Do not use unsupported claims such as “#1 agency” or “best in Rwanda.”

11. How It Works

Use four simple steps:

01 — Tell Us About Your Business

The customer provides information such as:

Business name

Services

Products

Prices

Images

Logo

Contact details

Location

Social media

Business story

02 — We Build

SiteCrafters designs and develops the website.

03 — Review

The customer reviews the website and provides feedback.

04 — Launch

The website is finalized and launched.

Keep this section visually simple.

12. Portfolio

Headline:

Our Latest Work

Show real SiteCrafters projects.

Each project should support:

Image

Business name

Industry

Description

Website link

Optional case study

Newest projects should appear first.

Add:

View All Projects

Portfolio must use the centralized project data system.

13. Case Studies

Allow portfolio projects to have optional detail pages.

Possible fields:

Business

Industry

Challenge

SiteCrafters approach

Screenshots

Verified result

Website URL

Never invent business results.

14. Team

Headline:

Meet the Team

Show the three-person founding team.

Each member should support:

Photo

Name

Role

Short bio

Optional social link

Use editable placeholders until real information is supplied.

Never invent qualifications or achievements.

15. Industries

Create a flexible section for businesses SiteCrafters can work with.

Examples:

Restaurants

Real Estate

Automotive

Retail

Local Services

Professional Services

Startups

Hospitality

Keep this data-driven so industries can easily be added or removed.

16. Features & Services

Show useful website capabilities such as:

Responsive design

Mobile optimization

Contact forms

WhatsApp integration

Social media links

Image galleries

Service sections

Product sections

Domain support

Hosting support

Basic SEO setup

Business information

Maps/location integration

Google presence support

Features must be associated with plans through editable data.

Do not imply every feature is included in every plan.

17. About

Explain the company simply:

SiteCrafters exists to make professional websites more accessible to businesses.

Explain the monthly model in clear language.

Keep the writing practical and human.

Avoid corporate buzzwords.

18. Trust

Build trust using real information:

Real portfolio projects

Real team members

Clear pricing

Clear process

Clear contact information

Clear ownership terms

Visible business information

Do not create fake:

Testimonials

Ratings

Awards

Client logos

Statistics

Customer counts

19. Referral Partner Program

Create a dedicated section/page:

Become a SiteCrafters Partner

Current referral structure:

15,000 RWF upfront + 5% recurring commission for up to 12 months

Clearly explain:

Find a business that needs a website

Submit the referral

SiteCrafters contacts the business

The business becomes a paying customer

The partner receives the applicable referral compensation

Create editable fields for:

Eligibility

Valid referral rules

Duplicate referral rules

Commission timing

Payment rules

Do not make this look like an MLM or recruitment scheme.

20. FAQ

Create a clean expandable FAQ.

Include questions about:

Pricing

Monthly payments

Website ownership

Website changes

Hosting

Domains

SEO

WhatsApp

Plan upgrades

Getting started

FAQ content must be editable from centralized data.

21. Contact

Headline:

Let's Build Your Website

Form fields:

Name

Business name

Email

Phone / WhatsApp

Business type

Desired plan

Current website

Message

Referral partner

The form must:

Validate fields

Show loading state

Show success state

Show useful errors

Prevent accidental duplicate submissions

Preserve selected plan

Keep private lead information private

22. WhatsApp

Make WhatsApp a major conversion option.

Button:

Chat on WhatsApp

Generate a prefilled message dynamically.

Example:

Hello SiteCrafters, I'm interested in getting a website. I'd like to learn more about the Starter plan.

The phone number must be controlled from the centralized configuration.

23. Footer

Include:

SiteCrafters Ltd.

Links:

Home

Plans

Our Work

Team

How It Works

Referral Partner

Contact

Also include editable:

Email

Phone

WhatsApp

Social links

Location

Copyright

24. SEO

Implement:

Page titles

Meta descriptions

Open Graph tags

Canonical URLs

Sitemap

Robots configuration

Proper headings

Image alt text

Clean URLs

Internal links

Structured data where appropriate

Target relevant searches such as:

Website development Rwanda

Website design Rwanda

Affordable website development Rwanda

Business websites Rwanda

Websites for small businesses in Rwanda

Do not keyword-stuff.

25. Performance

Keep the site fast.

Use:

Optimized images

Lazy loading

Responsive image sizes

Efficient JavaScript

Minimal dependencies

Good caching

Lightweight animations

Do not install libraries just to create visual effects.

26. Accessibility

Use:

Semantic HTML

Proper labels

Keyboard navigation

Visible focus states

Good contrast

Accessible accordions and menus

Useful alt text

Comfortable tap targets

Respect reduced-motion preferences.

27. Analytics

Prepare centralized analytics configuration.

Track:

Pricing CTA clicks

WhatsApp clicks

Contact form starts

Contact form submissions

Portfolio views

Referral applications

Do not hardcode private analytics credentials.

28. Error & Empty States

Build polished states for:

Loading

Empty portfolio

Missing images

Form errors

Failed submissions

Empty team content

Missing data

404 pages

The website should never look broken because content is missing.

29. Security

Never expose:

API secrets

Database keys

Private environment variables

Internal lead information

Use environment variables for sensitive configuration.

Validate and sanitize submitted form data.

Include basic spam protection.

30. Architecture Rules

Keep the project clean and modular.

Recommended structure:

src/
  components/
  pages/
  data/
  config/
  assets/
  styles/
  utils/


The exact structure can differ, but keep responsibilities separated.

Important rule:

Content should be separated from presentation.

For example:

data/
  plans.ts
  projects.ts
  team.ts
  faqs.ts
  industries.ts


And:

config/
  site.ts
  analytics.ts


This should make future editing extremely easy.

31. Editing Experience

The final project should allow a developer to perform common updates without redesigning components.

They should be able to easily:

Change the logo

Remove the logo

Change colors

Change pricing

Add a plan

Remove a plan

Add a portfolio project

Remove a project

Change a project image

Add a team member

Remove a team member

Change FAQs

Change contact information

Change WhatsApp number

Change social links

Change referral commission

Edit SEO defaults

All of these should happen through obvious configuration/data files wherever practical.

Avoid hardcoded content inside presentation components.

32. Final Homepage Structure

Use this order:

Navigation

Hero

Quick Pricing

Why SiteCrafters

Full Pricing

How It Works

Latest Work

Team

How We Build

Industries

Features

About

Referral Partner

FAQ

Final CTA

Footer

Do not add sections just to make the homepage longer.

33. Final CTA

Headline:

Ready to Give Your Business a Home Online?

Supporting text:

Tell us about your business and we'll help you choose the right plan.

Buttons:

Get Your Website

Chat on WhatsApp

34. Final Quality Standard

The finished product should be:

Clean

Professional

Fast

Responsive

Accessible

SEO-ready

Conversion-focused

Easy to maintain

Easy to edit

Data-driven

Human

Visually polished

The design should have just enough motion to feel alive, but never enough to distract from the business.

The code should be clean enough that another developer can open the project and understand what is happening quickly.

Most importantly:

Make the website simple for the customer and simple for the developer.

A visitor should quickly understand:

What does SiteCrafters do?

How much does it cost?

Can I see their work?

Who is behind the company?

How do I get started?

The website should answer those questions clearly, then make contacting SiteCrafters effortless.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ab585cf-905b-4541-9308-acf924c2ecad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
