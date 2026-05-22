import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Section</p>
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary via-accent to-transparent" />
    </div>
  )
}
