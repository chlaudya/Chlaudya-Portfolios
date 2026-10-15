"use client"
import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
export function Rise({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
export function SectionHead({ eyebrow, title, intro, id }: { eyebrow: string; title: ReactNode; intro?: string; id: string }) {
  return (
    <div>
      <p className="mg-eyebrow text-[var(--mg-medium)]">{eyebrow}</p>
      <h2 id={id} className="mg-title mt-2 text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--mg-medium)]">{intro}</p>}
    </div>
  )
}
