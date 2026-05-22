"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { skillCategories, toolingStrip } from "@/lib/skills-data"
import { fadeUp, defaultTransition } from "@/lib/animations"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { cn } from "@/lib/utils"

export function Skills() {
  const reduced = useReducedMotion()

  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-anchor bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Frontend craft, full-stack fluency, and the practices that keep shipping predictable."
          />
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-10">
          {toolingStrip.map((tool, i) => (
            <motion.span
              key={tool}
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...defaultTransition, delay: i * 0.05 }}
              className="px-3 py-1.5 text-xs font-mono rounded-md glass text-foreground"
            >
              {tool}
            </motion.span>
          ))}
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <StaggerItem key={category.category}>
                <div className="tile-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        variants={fadeUp}
                        transition={{ ...defaultTransition, delay: i * 0.03 }}
                        className={cn(
                          "px-3 py-1.5 text-sm rounded-lg",
                          "bg-primary/10 text-primary border border-primary/15",
                          "hover:bg-primary/20 transition-colors",
                        )}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
