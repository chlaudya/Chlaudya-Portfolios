"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"
import { useReducedMotion } from "./use-reduced-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (reduced) {
      setDisplay(value.toFixed(decimals))
      return
    }
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue, reduced, decimals])

  useEffect(() => {
    if (reduced) return
    return spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals))
    })
  }, [spring, reduced, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
