import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig, whatsappLink } from "@/config/site";
import { plans, findPlan, formatPlanPrice } from "@/data/plans";
import { trackEvent } from "@/config/analytics";

const title = "Contact SiteCrafters — Get Your Business Website in Rwanda";
const description =
  "Tell us about your business and we'll come back with a clear plan, timeline and monthly price. Based in Kigali, Rwanda.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  plan: string;
  message: string;
};

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ContactPage() {
  const { plan: planFromUrl } = Route.useSearch();
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    phone: "",
    email: "",
    plan: findPlan(planFromUrl)?.id ?? "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const summary = useMemo(() => {
    const chosen = findPlan(form.plan);
    return [
      `Hello ${siteConfig.name}, I'd like a website.`,
      `Name: ${form.name}`,
      form.business ? `Business: ${form.business}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
      chosen ? `Plan: ${chosen.name} (${formatPlanPrice(chosen)})` : "",
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!form.phone.trim() && !form.email.trim())
      next.phone = "Add a phone number or an email so we can reply.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email address doesn't look right.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little about your business (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(channel: "whatsapp" | "email") {
    if (!validate()) return;
    trackEvent("contact_submit", { channel, plan: form.plan || "none" });
    if (channel === "whatsapp") {
      window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
    } else {
      const subject = `Website enquiry — ${form.business || form.name}`;
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(summary)}`;
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your business"
        description="Share a few details and we'll reply with a recommended plan, timeline and monthly price — usually within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form
              className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                submit("whatsapp");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" error={errors.name} htmlFor="name">
                  <input
                    id="name"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Full name"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Business name" htmlFor="business">
                  <input
                    id="business"
                    className={inputClass}
                    value={form.business}
                    onChange={(e) => set("business", e.target.value)}
                    placeholder="Optional"
                  />
                </Field>
                <Field label="Phone / WhatsApp" error={errors.phone} htmlFor="phone">
                  <input
                    id="phone"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+250 …"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@business.rw"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Plan you're interested in" htmlFor="plan">
                <select
                  id="plan"
                  className={inputClass}
                  value={form.plan}
                  onChange={(e) => set("plan", e.target.value)}
                >
                  <option value="">Not sure yet — recommend one</option>
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {formatPlanPrice(p)}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="What does your business do?" error={errors.message} htmlFor="message">
                <textarea
                  id="message"
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Your services or products, who your customers are, and what you want the website to do."
                />
              </Field>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" size="lg">
                  Send on WhatsApp
                </Button>
                <Button type="button" size="lg" variant="outline" onClick={() => submit("email")}>
                  Send by email
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {siteConfig.contactForm.successMessage}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-base font-semibold text-foreground">Reach us directly</h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex gap-2.5">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Mail size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{siteConfig.location}</span>
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton className="w-full" source="contact_sidebar" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-base font-semibold text-foreground">
                While you wait, your website works
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your business may be open 8 hours a day — your website answers customers all 24.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
