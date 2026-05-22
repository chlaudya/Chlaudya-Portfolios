"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const PLACEHOLDER = "/placeholder-project.svg"

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ProjectImage({ src, alt, className, priority }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)
  const displaySrc = failed ? PLACEHOLDER : src

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={displaySrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        if (!failed) setFailed(true)
      }}
      className={cn(
        "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
        displaySrc.endsWith(".svg") && "object-contain bg-muted/50 p-8",
        className,
      )}
    />
  )
}

export function isSvgSrc(src: string): boolean {
  return src.endsWith(".svg")
}

