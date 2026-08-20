import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { processSteps, howWeBuild } from "@/data/content";
import { features } from "@/data/features";
import { plans } from "@/data/plans";

const title = "How It Works — Website Development Process | SiteCrafters";
const description =
  "From first conversation to launch: how SiteCrafters designs, builds, hosts and supports your business website on a monthly plan.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Four steps from first conversation to launch"
        description="No technical work on your side. You share your business information, we handle design, build, hosting and support."
      >
        <Button asChild size="lg">
          <Link to="/contact">Start your website</Link>
        </Button>
        <WhatsAppButton source="how_it_works_hero" />
      </PageHero>

      <Section>
        <ol className="grid gap-5 sm:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 70}
              className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="font-display text-2xl font-semibold text-primary">{step.number}</span>
              <h2 className="mt-3 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Our approach" title="How we build" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howWeBuild.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's included"
          title="Every capability, and the plans it belongs to"
          description="A quick reference so you know exactly what your plan covers."
        />
        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Capability
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className="px-4 py-3 text-center font-semibold text-foreground"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-t border-border">
                  <td className="px-4 py-3">
                    <span className="font-medium text-foreground">{feature.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {feature.description}
                    </span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-4 py-3 text-center">
                      {feature.plans.includes(plan.id) ? (
                        <span className="text-primary" aria-label="Included">
                          ✓
                        </span>
                      ) : (
                        <span className="text-muted-foreground" aria-label="Not included">
                          —
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/plans">See plans &amp; pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Get your website</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
