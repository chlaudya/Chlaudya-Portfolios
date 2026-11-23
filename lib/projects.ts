export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  description: string;
  tags: string[];
  images: string[];
  link?: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    slug: "ngblu",
    title: "PT. Itsavirus Development Bali",
    shortTitle: "NGBlu Networks",
    role: "Senior Frontend Engineer",
    highlight: "Team lead, Architecture",
    description:
      "I lead the frontend team at Itsavirus on the corporate site for NGBlu Networks, a Dutch network operator. I set the architecture, review the code and mentor the engineers who build it in React.",
    tags: ["Team Leadership", "React", "Architecture", "Mentoring"],
    images: ["/ngblu-1", "/ngblu-2", "/ngblu-3", "/ngblu-4", "/ngblu-5"],
    link: "https://www.ngblunetworks.nl/",
  },
  {
    slug: "baliconnect",
    title: "BaliConnect",
    shortTitle: "BaliConnect",
    role: "Frontend Engineer",
    highlight: "Packages, À la carte",
    description:
      "A travel site for Bali trips. Visitors pick a ready-made package, plan their own, or book transport, guides and activities one at a time. The layout is calm and editorial, and it holds up on a phone.",
    tags: ["Travel", "UI", "Responsive", "Marketing"],
    images: ["/baliconnect-1", "/baliconnect-2", "/baliconnect-3", "/baliconnect-4"],
    link: "https://baliconnect.id/",
  },
  {
    slug: "bfi",
    title: "PT. BFI Finance Indonesia, Tbk",
    shortTitle: "BFI Finance",
    role: "Frontend Engineer",
    highlight: "70% faster data entry",
    description:
      "New application workflows in BFI's back-office tools cut data-entry time by 70%. Project turnaround dropped by a quarter with a more streamlined process.",
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
      "Amar Bank's landing site, with 50% better performance. Test coverage went up by 80%, and I mentored the juniors on React.",
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
      "An Islamic wills platform in Australia on Next.js and Sanity. It's animated with Motion for React, and Core Web Vitals held up anyway.",
    tags: ["Next.js", "Motion", "Sanity", "Tailwind"],
    images: ["/muslim-1", "/muslim-2", "/muslim-3"],
    link: "https://www.muslimwills.com.au/",
  },
  {
    slug: "awqaf",
    title: "Awqaf Australia",
    shortTitle: "Awqaf Australia",
    role: "Frontend Engineer",
    highlight: "Stripe, Sanity CMS",
    description:
      "A waqf (Islamic endowment) charity in Australia. Working with Fullsuite Agency, I built the Next.js front end, the Sanity schema and the Stripe donation flow.",
    tags: ["Next.js", "Sanity", "Stripe", "Fullstack"],
    images: ["/awqaf-1", "/awqaf-2", "/awqaf-3"],
    link: "https://awqaf.org.au",
  },
];

export const socialLinks = {
  github: "https://github.com/chlaudya",
  linkedin: "https://www.linkedin.com/in/chlaudya-margareta-a50434118/",
  email: "mamuaya.chlaudya@gmail.com",
} as const;
