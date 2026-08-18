import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlanCards } from "@/components/PlanCards";
import { ProjectCard, EmptyProjects } from "@/components/ProjectCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { startingPrice } from "@/data/plans";
import { sortedProjects } from "@/data/projects";
import { sortedFaqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { whySiteCrafters, processSteps } from "@/data/content";

const title = "Website Development in Rwanda from 16,000 RWF/month | SiteCrafters";
const description =
  "SiteCrafters builds professional business websites in Rwanda on a simple monthly plan — design, hosting, domain support and ongoing help included.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = sortedProjects().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-primary-soft blur-3xl opacity-70"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {siteConfig.location}
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
                {siteConfig.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.description} No large upfront development bill — you pay a fixed monthly
                amount and we design, build, host and support your website.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                Plans starting from {startingPrice()}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get Your Website <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/plans">See Plans &amp; Pricing</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:justify-self-end">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8">
                <h2 className="font-display text-base font-semibold text-foreground">
                  What every plan includes
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-foreground">
                  {[
                    "Custom design around your business",
                    "Mobile-friendly on every device",
                    "Contact form + WhatsApp chat",
                    "Domain & hosting support",
                    "Basic SEO setup",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton
                    className="w-full"
                    source="home_hero"
                    message={`Hello ${siteConfig.name}, I'd like to know more about your monthly website plans.`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Why SiteCrafters"
          title="A professional website, without the upfront wall"
          description="Everything below is part of how we work — not an upsell."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whySiteCrafters.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple monthly plans"
          description="Pick a plan and we carry it straight through to your enquiry — no forms to retype."
        />
        <div className="mt-10">
          <PlanCards />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Not sure which plan fits?{" "}
          <Link to="/contact" className="font-medium text-primary hover:underline">
            Tell us about your business
          </Link>{" "}
          and we'll recommend one.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from first call to launch"
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <span className="font-display text-2xl font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/how-it-works">See the full process</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our work" title="Recent projects" />
        <div className="mt-10">
          {featured.length === 0 ? (
            <EmptyProjects />
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/work">View all work</Link>
          </Button>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Industries"
          title="Businesses we build for"
          description="If your business needs to be found, explained and contacted online, we can help."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.name}
              as="li"
              delay={i * 40}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <h3 className="text-sm font-semibold text-foreground">{industry.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{industry.note}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions we get asked" />
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {sortedFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal className="rounded-2xl border border-border bg-card p-8 text-center shadow-lift sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Ready to get your business online?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us about your business and we'll come back with a clear plan, timeline and monthly
            price.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Get Your Website</Link>
            </Button>
            <WhatsAppButton source="home_final_cta" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
