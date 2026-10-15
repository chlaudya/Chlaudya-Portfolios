import { projects } from "@/lib/projects"
import { Rise, SectionHead } from "./reveal"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="mg-section-light relative z-10 border-t border-black/10 px-5 pb-24 pt-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionHead id="exp-title" eyebrow="Career &" title="Experience"
            intro="Companies and products I've built for, the role I played, and the tech behind the work." />
        </div>
        <ol className="relative border-l border-black/10 pl-6">
          {projects.map((p, i) => (
            <li key={p.slug} className="relative border-b border-black/10 py-7 last:border-0">
              <span aria-hidden className="absolute -left-[29px] top-9 size-2.5 rounded-full bg-black ring-4 ring-[var(--mg-bg)]" />
              <Rise delay={i * 0.04}>
                <p className="text-xs text-[var(--mg-medium)]">{p.role}</p>
                <h3 className="mg-title mt-1 text-xl">{p.title}</h3>
                {p.highlight && <p className="mt-1 font-mono text-xs text-[var(--mg-medium)]">{p.highlight}</p>}
                <p className="mt-3 max-w-xl text-sm text-[#444]">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech & focus">
                  {p.tags.map((t) => <li key={t} className="mg-chip">{t}</li>)}
                </ul>
              </Rise>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
