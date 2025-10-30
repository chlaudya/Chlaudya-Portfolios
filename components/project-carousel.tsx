"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <img src="/placeholder.svg" alt={title} className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-muted overflow-hidden group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Navigation buttons - only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
