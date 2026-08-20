import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { referralConfig } from "@/data/referral";
import { siteConfig } from "@/config/site";

const title = "Referral Partner Program — Earn per Referral | SiteCrafters";
const description =
  "Refer a business to SiteCrafters and earn a commission when they join a monthly website plan. Clear terms, monthly payouts.";

export const Route = createFileRoute("/referral")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ReferralPage,
});

const ruleGroups = [
  { title: "Who can take part", items: referralConfig.eligibility },
  { title: "What counts as a valid referral", items: referralConfig.validReferralRules },
  { title: "Duplicate referrals", items: referralConfig.duplicateRules },
  { title: "When commission is earned", items: referralConfig.commissionTiming },
  { title: "How you get paid", items: referralConfig.paymentRules },
];

function ReferralPage() {
  return (
    <>
      <PageHero eyebrow="Partner program" title={referralConfig.title} description={referralConfig.intro}>
        <WhatsAppButton
          variant="default"
          source="referral_hero"
          label="Submit a referral"
          message={`Hello ${siteConfig.name}, I'd like to refer a business to you.`}
        />
        <Button asChild size="lg" variant="outline">
          <Link to="/contact">Ask a question</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { label: "Upfront commission", value: referralConfig.upfrontCommission },
            { label: "Recurring commission", value: referralConfig.recurringCommission },
            { label: "Commission duration", value: referralConfig.commissionDuration },
          ].map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card"
            >
              <p className="font-display text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Process" title="How the program works" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {referralConfig.steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Terms" title="The rules, in plain language" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ruleGroups.map((group, i) => (
            <Reveal
              key={group.title}
              as="article"
              delay={i * 50}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-display text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
