import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  BarChart3,
  Bot,
  Code2,
  Database,
  FlaskConical,
  Rocket,
  Smartphone,
} from "lucide-react"

export interface Tech {
  name: string
  /** Two-character badge label; unique across all categories. */
  abbr: string
}

export interface SkillCategory {
  category: string
  icon: LucideIcon
  skills: Tech[]
}

const t = (name: string, abbr: string): Tech => ({ name, abbr })

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    icon: Code2,
    skills: [
      t("JavaScript", "JS"), t("TypeScript", "TS"), t("React", "RE"), t("Next.js", "NX"),
      t("HTML/CSS", "HC"), t("Tailwind CSS", "TW"), t("Vite", "VI"), t("Motion", "MO"),
      t("shadcn/ui", "SH"),
    ],
  },
  {
    category: "State & API Management",
    icon: ArrowLeftRight,
    skills: [
      t("TanStack Query", "TQ"), t("Zustand", "ZU"), t("React Hook Form", "RH"),
      t("Zod", "ZD"), t("REST APIs", "RA"), t("GraphQL", "GQ"),
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: [
      t("Node.js", "ND"), t("Express", "EX"), t("MongoDB", "MG"), t("PostgreSQL", "PG"),
      t("Prisma", "PR"),
    ],
  },
  {
    category: "Testing & Quality",
    icon: FlaskConical,
    skills: [
      t("Jest", "JE"), t("Vitest", "VT"), t("React Testing Library", "RT"),
      t("Playwright", "PW"), t("TDD", "TD"), t("Web Performance", "WP"),
      t("Accessibility", "AX"),
    ],
  },
  {
    category: "Delivery & Infrastructure",
    icon: Rocket,
    skills: [
      t("Git", "GI"), t("GitHub Actions", "GH"), t("Docker", "DK"), t("Vercel", "VC"),
      t("Sentry", "SE"), t("CI/CD", "CI"),
    ],
  },
  {
    category: "CMS & Analytics",
    icon: BarChart3,
    skills: [t("Sanity", "SN"), t("GA4", "G4"), t("Google Tag Manager", "GM"), t("SEO", "SO")],
  },
  {
    category: "AI & Automation",
    icon: Bot,
    skills: [
      t("AI-Assisted Development", "AI"), t("Claude", "CL"), t("Cursor", "CU"),
      t("BMAD", "BM"), t("Task Master", "TK"), t("n8n", "N8"),
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [t("React Native", "RN"), t("Dart", "DA"), t("Flutter", "FL")],
  },
]

export const toolingStrip = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Sanity",
  "Claude",
  "n8n",
]
