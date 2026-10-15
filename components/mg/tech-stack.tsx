import { skillCategories } from "@/lib/skills-data"
import { Rise, SectionHead } from "./reveal"

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHead id="stack-title" eyebrow="Technologies &" title="Tech Stack"
          intro="The tools I use to build, test, and ship modern web applications — from frontend architecture and API integration to performance, automation, and AI-assisted engineering." />
        <div className="space-y-10">
          {skillCategories.map((c, ci) => {
            const Icon = c.icon
            return (
              <Rise key={c.category} delay={ci * 0.05}>
                <div role="group" aria-labelledby={`stack-${ci}`}>
                <h3 id={`stack-${ci}`} className="mg-eyebrow flex items-center gap-2 text-[var(--mg-medium)]"><Icon className="size-3.5" aria-hidden />{c.category}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {c.skills.map((s) => (
                    <li key={s.name} className="flex min-w-0 items-center gap-2.5 text-xs">
                      <span aria-hidden className="grid size-6 shrink-0 place-items-center rounded bg-[var(--mg-badge-bg)] font-mono text-[9px] font-semibold text-[var(--mg-badge-fg)]">
                        {s.abbr}
                      </span>
                      <span className="min-w-0 break-words">{s.name}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </Rise>
            )
          })}
        </div>
      </div>
    </section>
  )
}
