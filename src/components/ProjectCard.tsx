// A single portfolio card, generated from src/data/projects.ts.
// Handles the missing-image case with a clean placeholder instead of a
// broken image, so unfinished content never looks broken.
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/projects";
import { trackEvent } from "@/config/analytics";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 70}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.business} website designed by SiteCrafters`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon size={20} aria-hidden="true" />
            <span className="text-xs">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            {project.category}
          </span>
          {project.featured ? (
            <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-display text-base font-semibold text-foreground">
          {project.business}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 pt-1 mt-auto text-sm font-medium">
          {project.caseStudy ? (
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="text-primary hover:underline"
              onClick={() => trackEvent("portfolio_view", { project: project.slug })}
            >
              View case study
            </Link>
          ) : null}
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
              onClick={() => trackEvent("portfolio_view", { project: project.slug })}
            >
              Visit website <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

/** Shown when the portfolio has no published projects yet. */
export function EmptyProjects() {
  return (
    <div className="rounded-xl border border-dashed border-border p-10 text-center">
      <p className="text-sm font-medium text-foreground">Projects are being added</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Get in touch and we'll walk you through recent work directly.
      </p>
    </div>
  );
}
