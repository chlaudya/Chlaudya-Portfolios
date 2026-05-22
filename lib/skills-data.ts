import type { LucideIcon } from "lucide-react"
import { Bot, Code2, Database, Smartphone, Sparkles } from "lucide-react"

export interface SkillCategory {
  category: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Vite", "Motion"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Dart", "Flutter"],
  },
  {
    category: "Best Practices",
    icon: Sparkles,
    skills: [
      "TDD",
      "Jest",
      "Vitest",
      "RTL",
      "Web Performance",
      "Source Control",
      "Agile",
    ],
  },
  {
    category: "AI & Automation",
    icon: Bot,
    skills: ["AI", "Claude", "BMAD", "Task Master", "n8n"],
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
