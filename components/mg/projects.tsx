import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { ProjectImage } from "@/components/project-image"
import { Rise, SectionHead } from "./reveal"

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 id="projects-title" className="mg-title text-5xl md:text-7xl">Featured<br />_Projects</h2>
          <p className="max-w-xs text-sm text-[var(--mg-medium)]">
            A selection of corporate platforms, product sites and dashboards I&apos;ve shipped — with the outcomes they delivered.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Rise delay={(i % 3) * 0.08} className="group flex h-full flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden bg-[var(--mg-very-light)]">
                  <ProjectImage src={p.images[0]} alt={`${p.shortTitle} screenshot`} />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex justify-between gap-2">
                    <span className="mg-eyebrow text-[var(--mg-medium)]">{p.tags[0]}</span>
                    {p.highlight && <span className="mg-eyebrow text-[var(--mg-medium)]">{p.highlight}</span>}
                  </div>
                  <h3 className="mg-title mt-2 text-xl">{p.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#444]">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="mg-chip">{p.role}</span>
                    <span className="mg-chip bg-transparent ring-1 ring-black/10">{p.title}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="mg-pill mg-pill-dark !py-1.5">
                        Visit <ArrowUpRight className="size-3" aria-hidden /><span className="sr-only"> {p.shortTitle} (opens in new tab)</span>
                      </a>
                    ) : <span />}
                    <span className="mg-eyebrow text-[var(--mg-medium)]">{p.tags.slice(1, 3).join(" · ")}</span>
                  </div>
                </div>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
