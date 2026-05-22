export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  description: string;
  tags: string[];
  images: string[];
  link?: string;
  featured?: boolean;
  highlight?: string;
}

export const projects: Project[] = [
  {
    slug: "ngblu",
    title: "PT. Itsavirus Development Bali",
    shortTitle: "NGBlu Networks",
    role: "Senior Frontend Engineer",
    highlight: "Team lead · Architecture",
    description:
      "Leading a frontend team and shipping the NGBlu Networks corporate site — mentoring engineers, driving architecture, and delivering production-grade React experiences.",
    tags: ["Team Leadership", "React", "Architecture", "Mentoring"],
    images: ["/ngblu-1", "/ngblu-2", "/ngblu-3", "/ngblu-4", "/ngblu-5"],
    link: "https://www.ngblunetworks.nl/",
    featured: true,
  },
  {
    slug: "bfi",
    title: "PT. BFI Finance Indonesia, Tbk",
    shortTitle: "BFI Finance",
    role: "Frontend Engineer",
    highlight: "70% faster data entry",
    description:
      "Cut data-entry time by 70% through new application workflows. Improved project quality 30% and shortened turnaround 25% with agile delivery.",
    tags: ["React", "Performance", "Agile", "FinTech"],
    images: ["/bfi-1", "/bfi-2", "/bfi-3"],
    link: "https://www.bfi.co.id",
  },
  {
    slug: "amarbank",
    title: "PT. Bank Amar Indonesia, Tbk",
    shortTitle: "Amar Bank",
    role: "Frontend Engineer",
    highlight: "50% perf uplift",
    description:
      "Boosted digital banking landing performance by 50%, raised test coverage 80%, and mentored juniors on React and web performance.",
    tags: ["Banking", "Performance", "Testing", "Mentoring"],
    images: ["/tunaiku-1", "/tunaiku-2", "/tunaiku-3"],
    link: "https://amarbank.co.id/",
  },
  {
    slug: "muslimwills",
    title: "MuslimWills",
    shortTitle: "MuslimWills",
    role: "Frontend Engineer",
    highlight: "Motion-rich UI",
    description:
      "Islamic-compliant wills platform with Next.js and Sanity. Pixel-perfect UI with Motion for React while keeping Core Web Vitals strong.",
    tags: ["Next.js", "Motion", "Sanity", "Tailwind"],
    images: ["/muslim-1", "/muslim-2", "/muslim-3"],
    link: "https://www.muslimwills.com.au/",
  },
  {
    slug: "awqaf",
    title: "Awqaf Australia",
    shortTitle: "Awqaf Australia",
    role: "Frontend Engineer",
    highlight: "Stripe · Sanity CMS",
    description:
      "Charitable waqf platform with Next.js, Sanity schema, and Stripe — secure donations and dynamic content with Fullsuite Agency.",
    tags: ["Next.js", "Sanity", "Stripe", "Fullstack"],
    images: ["/awqaf-1", "/awqaf-2", "/awqaf-3"],
    link: "https://awqaf.org.au",
  },
];

export const socialLinks = {
  github: "https://github.com/chlaudya",
  linkedin: "https://www.linkedin.com/in/margareta-ch-a50434118/",
  email: "mamuaya.chlaudya@gmail.com",
} as const;
