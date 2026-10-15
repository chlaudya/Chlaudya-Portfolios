import { projects } from "@/lib/projects"
import { Rise, SectionHead, SplitLayout } from "./reveal"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="px-5 pb-24 pt-20 md:px-10">
      <SplitLayout
        aside={
          <SectionHead id="exp-title" eyebrow="Career &" title="Experience"
            intro="Companies and products I've built for, the role I played, and the tech behind the work." />
        }
      >
        <ol className="relative border-l border-[var(--mg-line)] pl-6">
          {projects.map((p, i) => (
            <li key={p.slug} className="relative border-b border-[var(--mg-line)] py-7 last:border-0">
              <span aria-hidden className="absolute -left-[29px] top-9 size-2.5 rounded-full bg-[var(--mg-fg)] ring-4 ring-[var(--mg-panel)]" />
              <Rise delay={i * 0.04}>
                <p className="text-xs text-[var(--mg-medium)]">{p.role}</p>
                <h3 className="mg-title mt-1 text-xl">{p.title}</h3>
                {p.highlight && <p className="mt-1 font-mono text-xs text-[var(--mg-medium)]">{p.highlight}</p>}
                <p className="mt-3 max-w-xl text-sm text-[var(--mg-body)]">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech & focus">
                  {p.tags.map((t) => <li key={t} className="mg-chip">{t}</li>)}
                </ul>
              </Rise>
            </li>
          ))}
        </ol>
      </SplitLayout>
    </section>
  )
}
