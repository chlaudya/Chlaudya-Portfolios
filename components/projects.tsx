"use client"

import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { projects } from "@/lib/projects"

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-anchor relative">
      <div className="absolute inset-0 mesh-hero opacity-40 pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Selected Work"
            subtitle="Corporate, fintech, travel, and product builds — from team leadership to motion-rich marketing sites."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
