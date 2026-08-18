import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { teamMembers, initials } from "@/data/team";
import { aboutContent, howWeBuild } from "@/data/content";
import { siteConfig } from "@/config/site";

const title = "Our Team — The People Behind SiteCrafters Rwanda";
const description =
  "Meet the SiteCrafters founding team in Kigali. You work directly with the designers and developers building your website.";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="You talk to the people building your website"
        description={`${siteConfig.legalName} is a small team based in ${siteConfig.location}. No account managers between you and the work.`}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal
              key={`${member.name}-${i}`}
              as="article"
              delay={i * 70}
              className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at SiteCrafters`}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-semibold text-accent-foreground"
                  >
                    {initials(member.name)}
                  </span>
                )}
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground">
                    {member.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              {member.socialUrl ? (
                <a
                  href={member.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {member.socialLabel ?? "Profile"}
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="About" title={aboutContent.heading} />
        <div className="mt-6 max-w-3xl space-y-4">
          {aboutContent.paragraphs.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our approach" title="How we build" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {howWeBuild.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/contact">Work with us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
