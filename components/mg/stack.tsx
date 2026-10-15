"use client"
import { useEffect, useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * Homepage section panel: per-section tone (background + color tokens) and an
 * optional subtle rounded top edge that tucks over the previous section.
 *
 * `pin` opts a section into the migss.dev stacked-card overlap: it becomes
 * `position: sticky` with `top: min(0px, 100svh - height)` (tall sections pin
 * once their bottom reaches the viewport), and scales/dims slightly while the
 * next section slides over it. Disabled under prefers-reduced-motion.
 */
export function StackSection({
  children,
  index,
  className,
  rounded = true,
  tone,
  pin = false,
}: {
  children: ReactNode
  index: number
  className?: string
  rounded?: boolean
  /** Panel palette: sets background, text and per-panel color tokens. */
  tone?: "light" | "dark" | "stone" | "charcoal"
  /** Pin this section and let the next one slide over it. */
  pin?: boolean
}) {
  const reduced = useReducedMotion()
  const sticky = pin && !reduced
  const panel = cn(
    "relative",
    tone && `mg-tone-${tone}`,
    rounded && "-mt-8 overflow-clip rounded-t-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_-24px_48px_-24px_rgb(0_0_0/0.35)]",
    className,
  )

  if (!sticky) {
    return (
      <div style={{ zIndex: 10 + index }} className={panel}>
        {children}
      </div>
    )
  }
  return (
    <PinnedSection index={index} className={panel}>
      {children}
    </PinnedSection>
  )
}

function PinnedSection({ children, index, className }: { children: ReactNode; index: number; className: string }) {
  const ref = useRef<HTMLDivElement>(null)
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

  return (
    <div
      ref={ref}
      style={{ zIndex: 10 + index, top: "min(0px, calc(100svh - var(--stack-h, 100svh)))" }}
      className="sticky"
    >
      <motion.div style={{ scale, transformOrigin: "50% 0%" }} className={cn(className, "overflow-clip")}>
        {children}
        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.div>
    </div>
  )
}
