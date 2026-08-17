// Site footer. Links come from navItems, contact details from siteConfig.
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { navItems } from "./Header";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          {siteConfig.social.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-4">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold text-foreground">Pages</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={15} aria-hidden="true" />
              <a className="hover:text-primary" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} aria-hidden="true" />
              <a className="hover:text-primary" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} aria-hidden="true" />
              <a
                className="hover:text-primary"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
