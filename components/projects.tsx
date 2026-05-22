"use client"

import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { projects } from "@/lib/projects"

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-anchor relative">
      <div className="absolute inset-0 mesh-hero opacity-40 pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Selected Work"
            subtitle="Corporate, fintech, and product builds — from team leadership to motion-rich marketing sites."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={featured.length + i} />
          ))}
        </div>
      </div>
    </section>
  )
}
