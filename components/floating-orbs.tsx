"use client"

import { motion } from "motion/react"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { cn } from "@/lib/utils"

const orbs = [
  { className: "top-[12%] left-[8%] size-72 bg-primary/25", duration: 14, delay: 0 },
  { className: "top-[20%] right-[5%] size-96 bg-accent/20", duration: 18, delay: 2 },
  { className: "bottom-[15%] left-[30%] size-64 bg-primary/15", duration: 12, delay: 1 },
]

export function FloatingOrbs({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-3xl", orb.className)}
          animate={{
            y: [0, -24, 12, 0],
            x: [0, 16, -8, 0],
            scale: [1, 1.08, 0.95, 1],
            opacity: [0.4, 0.65, 0.45, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
