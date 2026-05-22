"use client"

import { motion } from "motion/react"
import { useReducedMotion } from "./use-reduced-motion"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ComponentProps<typeof motion.a> {
  children: React.ReactNode
  variant?: "primary" | "outline"
}

export function GradientButton({
  children,
  className,
  variant = "primary",
  ...props
}: GradientButtonProps) {
  const reduced = useReducedMotion()

  return (
    <motion.a
      whileHover={reduced ? undefined : { scale: 1.03, y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-shadow",
        variant === "primary" && "btn-gradient text-primary-foreground shadow-lg",
        variant === "outline" && "glass text-foreground hover:shadow-md",
        className,
      )}
      {...props}
    >
      {variant === "primary" && (
        <span
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary via-accent to-primary blur-sm -z-10"
          aria-hidden
        />
      )}
      {children}
    </motion.a>
  )
}
