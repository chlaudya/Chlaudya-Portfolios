"use client"

import { motion } from "motion/react"
import { Layers, Sparkles, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { cn } from "@/lib/utils"

const tiles: { icon: LucideIcon; title: string; subtitle: string; delay: number }[] = [
  {
    icon: Layers,
    title: "Product UI",
    subtitle: "React · TypeScript · Next.js",
    delay: 0,
  },
  {
    icon: Sparkles,
    title: "Motion & UX",
    subtitle: "Scroll stories · Micro-interactions",
    delay: 0.15,
  },
  {
    icon: Zap,
    title: "Ship Faster",
    subtitle: "AI-assisted · Payments · Perf",
    delay: 0.3,
  },
]

export function HeroFeatureTiles() {
  const reduced = useReducedMotion()

  return (
    <div className="hidden lg:flex flex-col gap-4 w-full max-w-[280px] shrink-0">
      {tiles.map((tile) => {
        const Icon = tile.icon
        return (
          <motion.div
            key={tile.title}
            initial={reduced ? false : { opacity: 0, x: 24 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + tile.delay, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "tile-card p-4 flex items-start gap-3",
              !reduced && "animate-float",
            )}
            style={!reduced ? { animationDelay: `${tile.delay * 2}s` } : undefined}
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shrink-0">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{tile.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{tile.subtitle}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
