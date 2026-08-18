import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlanCards } from "@/components/PlanCards";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { plans } from "@/data/plans";
import { features } from "@/data/features";
import { sortedFaqs } from "@/data/faqs";

const title = "Plans & Pricing — Monthly Website Plans in Rwanda | SiteCrafters";
const description =
  "Compare SiteCrafters website plans: Starter, Growth and Business. Fixed monthly pricing in RWF covering design, hosting, domain support and ongoing help.";

export const Route = createFileRoute("/plans")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PlansPage,
});

function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans & Pricing"
        title="Fixed monthly pricing, no upfront development bill"
        description="Every plan covers design, build, hosting support and a direct line to the people doing the work. Choose the size that matches your business today — you can upgrade later."
      >
        <WhatsAppButton source="plans_hero" label="Ask about a plan" />
      </PageHero>

      <Section>
        <PlanCards />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Comparison"
          title="What's included in each plan"
          description="A feature is included only where it's marked."
        />
        <Reveal className="mt-10 overflow-x-auto rounded-xl border border-border bg-card shadow-card">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">Feature comparison across SiteCrafters plans</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-5 py-4 text-left font-semibold text-foreground">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className="px-5 py-4 text-center font-semibold text-foreground"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-b border-border/60 last:border-0">
                  <th scope="row" className="px-5 py-3.5 text-left font-normal">
                    <span className="font-medium text-foreground">{feature.name}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {feature.description}
                    </span>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-5 py-3.5 text-center">
                      {feature.plans.includes(plan.id) ? (
                        <>
                          <Check
                            size={16}
                            className="mx-auto text-primary"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Included in {plan.name}</span>
                        </>
                      ) : (
                        <>
                          <Minus
                            size={16}
                            className="mx-auto text-muted-foreground/50"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Not included in {plan.name}</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {sortedFaqs.slice(0, 6).map((faq, i) => (
              <AccordionItem key={faq.question} value={`plan-faq-${i}`}>
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
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/contact">Get Your Website</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
