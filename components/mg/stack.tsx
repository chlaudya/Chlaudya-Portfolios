"use client"
import { useEffect, useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * Card-stack scroll section (migss.dev pattern): each section is `position: sticky`
 * with `top: min(0px, 100svh - height)` so tall sections pin once their bottom
 * reaches the viewport. The next section (higher z-index, rounded top) slides over
 * it while the covered one scales down slightly and dims.
 */
export function StackSection({
  children,
  index,
  className,
  rounded = true,
  pin = true,
  tone,
}: {
  children: ReactNode
  index: number
  className?: string
  rounded?: boolean
  pin?: boolean
  /** Panel palette: sets background, text and per-panel color tokens. */
  tone?: "light" | "dark" | "stone" | "charcoal"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.55])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => el.style.setProperty("--stack-h", `${el.offsetHeight}px`))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const sticky = pin && !reduced
  return (
    <div
      ref={ref}
      style={{ zIndex: 10 + index, top: sticky ? "min(0px, calc(100svh - var(--stack-h, 100svh)))" : undefined }}
      className={cn("relative isolate", sticky && "sticky")}
    >
      <motion.div
        style={sticky ? { scale, transformOrigin: "50% 0%" } : undefined}
        className={cn(
          "relative overflow-clip",
          tone && `mg-tone-${tone}`,
          rounded && "rounded-t-[clamp(2rem,5vw,3rem)] shadow-[0_-24px_48px_-24px_rgb(0_0_0/0.35)]",
          className,
        )}
      >
        {children}
        {sticky && (
          <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
        )}
      </motion.div>
    </div>
  )
}
