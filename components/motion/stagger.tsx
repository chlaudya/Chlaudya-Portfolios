"use client"

import type React from "react"
import { motion, type HTMLMotionProps } from "motion/react"
import { staggerContainer, fadeUp, defaultTransition } from "@/lib/animations"
import { useReducedMotion } from "./use-reduced-motion"
import { cn } from "@/lib/utils"

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: "div" | "ul" | "section"
}

export function Stagger({ children, className, as = "div", ...props }: StaggerProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) {
    const Tag = as
    return (
      <Tag className={className} {...(props as React.HTMLAttributes<HTMLElement>)}>
        {children}
      </Tag>
    )
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={fadeUp} transition={defaultTransition} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
