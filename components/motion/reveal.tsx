"use client"

import type React from "react"
import { motion, type HTMLMotionProps } from "motion/react"
import { fadeUp, defaultTransition } from "@/lib/animations"
import { useReducedMotion } from "./use-reduced-motion"
import { cn } from "@/lib/utils"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  as?: "div" | "section" | "article" | "li"
}

export function Reveal({ children, className, delay = 0, as = "div", ...props }: RevealProps) {
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
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
