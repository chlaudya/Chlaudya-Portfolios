"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectImage, isSvgSrc } from "@/components/project-image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  images: string[]
  title: string
  variant?: "default" | "featured"
}

export function ProjectCarousel({ images, title, variant = "default" }: ProjectCarouselProps) {
  const slides = images?.length ? images : ["/placeholder-project.svg"]
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const isFeatured = variant === "featured"

  return (
    <Carousel className="w-full h-full" setApi={setApi} opts={{ loop: true }}>
      <CarouselContent className="h-full ml-0">
        {slides.map((src, index) => (
          <CarouselItem key={`${src}-${index}`} className="pl-0 h-full">
            <div
              className={cn(
                "relative w-full overflow-hidden bg-muted",
                isFeatured ? "aspect-[16/9] md:aspect-auto md:h-full md:min-h-[320px]" : "aspect-[16/10]",
              )}
            >
              {isSvgSrc(src) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={`${title} — slide ${index + 1}`}
                  className="h-full w-full object-contain bg-muted/50 p-8"
                />
              ) : (
                <ProjectImage
                  src={src}
                  alt={`${title} — slide ${index + 1}`}
                  priority={index === 0}
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {slides.length > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 p-3 md:p-4">
            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    current === index
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-foreground/30 hover:bg-foreground/50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full glass flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full glass flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
            aria-label="Next slide"
          >
            <ChevronRight className="size-4" />
          </button>
        </>
      )}
    </Carousel>
  )
}
