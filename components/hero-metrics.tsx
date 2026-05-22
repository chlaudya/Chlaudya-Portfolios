"use client"

import { motion } from "motion/react"
import { AnimatedCounter } from "@/components/motion/animated-counter"
import { Reveal } from "@/components/motion/reveal"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"

const metrics = [
  { value: 6, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Platforms shipped" },
  { value: 50, suffix: "%", label: "Landing perf gain" },
  { value: 70, suffix: "%", label: "Workflow time saved" },
]

export function HeroMetrics() {
  const reduced = useReducedMotion()

  return (
    <section id="metrics" className="relative px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 -mt-4 section-anchor">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="tile-card group text-center p-5 md:p-6"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
