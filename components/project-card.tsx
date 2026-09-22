"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"
import type { Project } from "@/lib/projects"
import { defaultTransition } from "@/lib/animations"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ ...defaultTransition, delay: index * 0.07 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl tile-card",
        "transition-all duration-500",
        "hover:project-card-glow",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-accent/10",
        "before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
      )}
    >
      <div className="relative w-full shrink-0 overflow-hidden">
        <ProjectCarousel images={project.images} title={project.shortTitle} />

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full",
              "glass text-foreground transition-all duration-300",
              "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
              "hover:bg-primary hover:text-primary-foreground hover:scale-105",
            )}
            aria-label={`Open ${project.shortTitle}`}
          >
            <ArrowUpRight className="size-4" />
          </a>
        )}

        <span className="absolute top-4 left-4 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 glass px-2 py-1 rounded-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content panel */}
      <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.highlight && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-accent/10 text-accent border border-accent/20">
              {project.highlight}
            </span>
          )}
        </div>

        <p className="text-xs font-mono text-muted-foreground mb-1">{project.role}</p>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-1">
          {project.shortTitle}
        </h3>
        <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-1">{project.title}</p>

        <p className="mb-5 min-h-[4.25rem] text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex min-h-[3.75rem] flex-wrap content-start gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] rounded-md font-medium bg-muted/80 text-foreground/80 border border-border/50 transition-colors group-hover:border-primary/20 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors w-fit group/link"
          >
            View live site
            <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  )
}
