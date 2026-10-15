import { skillCategories } from "@/lib/skills-data"
import { Rise, SectionHead } from "./reveal"

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHead id="stack-title" eyebrow="Technologies &" title="Tech Stack"
          intro="The tools I use day to day — from frontend frameworks and testing to mobile and AI-assisted automation." />
        <div className="space-y-10">
          {skillCategories.map((c, ci) => {
            const Icon = c.icon
            return (
              <Rise key={c.category} delay={ci * 0.05}>
                <h3 className="mg-eyebrow flex items-center gap-2 text-[var(--mg-medium)]"><Icon className="size-3.5" aria-hidden />{c.category}</h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                  {c.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-xs">
                      <span aria-hidden className="grid size-6 place-items-center rounded bg-black font-mono text-[9px] font-semibold text-white">
                        {s.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Rise>
            )
          })}
        </div>
      </div>
    </section>
  )
}
