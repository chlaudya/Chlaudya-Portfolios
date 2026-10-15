"use client"
import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
export function Rise({
  children,
  delay = 0,
  className,
  animate = false,
}: {
  children: ReactNode
  delay?: number
  className?: string
  /** Opt in to the scroll fade-up reveal; off by default so sections render statically. */
  animate?: boolean
}) {
  const reduced = useReducedMotion()
  if (!animate || reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger as soon as any part enters (with a small bottom inset) so tall blocks never stay hidden.
      viewport={{ once: true, amount: "some", margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: Math.min(delay, 0.2), ease: "easeOut" }}
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
