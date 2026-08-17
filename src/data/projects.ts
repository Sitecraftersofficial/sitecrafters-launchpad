// All portfolio projects live here.
// To ADD a project: add one object below (and one image in /public/portfolio).
// To REMOVE a project: delete the object, or set `published: false`.
// Newest projects (by createdAt) are shown first automatically.

export type Project = {
  /** URL slug for the optional case-study page: /work/<slug> */
  slug: string;
  name: string;
  business: string;
  category: string; // industry
  description: string;
  image: string; // leave "" to show a clean placeholder instead of a broken image
  websiteUrl?: string;
  createdAt: string; // ISO date, used for sorting
  featured: boolean;
  published?: boolean;
  /** Optional case study. Omit entirely to hide the detail page link. */
  caseStudy?: {
    challenge: string;
    approach: string;
    /** Only verified, client-confirmed results. Leave empty if none. */
    result?: string;
    screenshots?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "add-project-1",
    name: "[ADD PROJECT]",
    business: "[ADD BUSINESS NAME]",
    category: "Real Estate",
    description:
      "[ADD PROJECT DESCRIPTION] — replace this placeholder once the client project is confirmed.",
    image: "",
    createdAt: "2026-08-01",
    featured: true,
    published: true,
  },
  {
    slug: "add-project-2",
    name: "[ADD PROJECT]",
    business: "[ADD BUSINESS NAME]",
    category: "Restaurants",
    description:
      "[ADD PROJECT DESCRIPTION] — replace this placeholder once the client project is confirmed.",
    image: "",
    createdAt: "2026-07-15",
    featured: false,
    published: true,
  },
  {
    slug: "add-project-3",
    name: "[ADD PROJECT]",
    business: "[ADD BUSINESS NAME]",
    category: "Local Services",
    description:
      "[ADD PROJECT DESCRIPTION] — replace this placeholder once the client project is confirmed.",
    image: "",
    createdAt: "2026-07-02",
    featured: false,
    published: true,
  },
];

/** Published projects, newest first, featured ones surfaced to the top. */
export function sortedProjects() {
  return projects
    .filter((p) => p.published !== false)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.createdAt.localeCompare(a.createdAt);
    });
}

export function findProject(slug: string) {
  return sortedProjects().find((p) => p.slug === slug);
}
