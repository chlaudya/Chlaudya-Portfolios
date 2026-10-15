import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Homepage section panel: sets the per-section tone (background + color tokens)
 * and an optional subtle rounded top edge that tucks over the previous section.
 * Sections scroll normally — no pinning or scroll-linked transforms.
 */
export function StackSection({
  children,
  index,
  className,
  rounded = true,
  tone,
}: {
  children: ReactNode
  index: number
  className?: string
  rounded?: boolean
  /** Panel palette: sets background, text and per-panel color tokens. */
  tone?: "light" | "dark" | "stone" | "charcoal"
}) {
  return (
    <div
      style={{ zIndex: 10 + index }}
      className={cn(
        "relative",
        tone && `mg-tone-${tone}`,
        rounded && "-mt-8 rounded-t-[clamp(1.5rem,4vw,2.5rem)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
