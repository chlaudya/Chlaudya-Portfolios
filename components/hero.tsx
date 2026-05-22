"use client"

import type { ComponentType } from "react"
import { motion } from "motion/react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/animations"
import { socialLinks } from "@/lib/projects"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { FloatingOrbs } from "@/components/floating-orbs"
import { HeroFeatureTiles } from "@/components/hero-feature-tiles"
import { GradientButton } from "@/components/motion/gradient-button"
import { cn } from "@/lib/utils"

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center section-anchor overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 mesh-hero mesh-animate pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-noise pointer-events-none opacity-50" aria-hidden />
      <FloatingOrbs />

      <div className="relative max-w-6xl mx-auto w-full py-24 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <motion.div
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 flex-1 max-w-2xl"
          >
            <motion.div variants={fadeUp} transition={defaultTransition}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass border-primary/20 text-foreground/90">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                Available for senior frontend roles
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={defaultTransition}
              className="font-mono text-sm uppercase tracking-[0.25em] text-accent"
            >
              Senior Frontend Engineer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={defaultTransition}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              <span className="gradient-text-animated">Chlaudya</span>{" "}
              <span className="text-foreground">Margareta</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={defaultTransition}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
            >
              Detail-oriented frontend engineer with 6+ years in React, TypeScript,
              and modern JavaScript stacks — 10+ corporate platforms and admin
              dashboards shipped, with a 30% lift in user engagement. I move fast with
              AI-assisted development, payment integrations, and motion-rich UI in
              global, cross-functional teams.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={defaultTransition}
              className="font-mono text-sm text-muted-foreground"
            >
              Bali, Indonesia · {socialLinks.email}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-wrap gap-4 pt-2"
            >
              <GradientButton href="#projects">View My Work</GradientButton>
              <GradientButton href="#contact" variant="outline">
                Get in Touch
              </GradientButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <SocialChip href={socialLinks.github} label="GitHub" icon={Github} />
              <SocialChip href={socialLinks.linkedin} label="LinkedIn" icon={Linkedin} />
              <SocialChip href={`mailto:${socialLinks.email}`} label="Email" icon={Mail} />
            </motion.div>
          </motion.div>

          <HeroFeatureTiles />
        </div>

        <motion.a
          href="#metrics"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to highlights"
        >
          <ArrowDown className="size-6" />
        </motion.a>
      </div>
    </section>
  )
}

function SocialChip({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium",
        "text-muted-foreground hover:text-foreground transition-colors",
      )}
    >
      <Icon className="size-4" />
      {label}
    </motion.a>
  )
}
