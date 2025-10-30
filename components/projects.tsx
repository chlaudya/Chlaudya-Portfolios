"use client"

import { ProjectCarousel } from "./project-carousel"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "PT. Itsavirus Development Bali",
      description:
        "Senior Frontend Engineer - Leading and mentoring a team of frontend engineers, driving technical decisions, and fostering a growth-oriented culture. Implementing architectural improvements and conducting rigorous code reviews.",
      tags: ["Team Leadership", "Technical Architecture", "Code Review", "Mentoring"],
      images: ["/ngblu-1", "/ngblu-2", "/ngblu-3", "/ngblu-4", "/ngblu-5"],
    },
    {
      title: "PT. BFI Finance Indonesia, Tbk",
      description:
        "Frontend Engineer - Reduced data entry time by 70% through new application development. Achieved 30% improvement in project quality and 25% reduction in project turnaround time through agile methodologies.",
      tags: ["React", "Performance", "Agile", "Quality Assurance"],
      images: ["/bfi-1", "bfi-2", "bfi-3"],
      link: "https://www.bfi.co.id"
    },
    {
      title: "PT. Bank Amar Indonesia, Tbk",
      description:
        "Frontend Engineer - Improved digital banking landing website performance by 50%. Increased code coverage by 80% and mentored junior developers on best practices and skill development.",
      tags: ["Banking", "Performance Optimization", "Testing", "Mentoring"],
      images: ["/tunaiku-1", "/tunaiku-2", "tunaiku-3"],
      link: "https://amarbank.co.id/"
    },
    {
      title: "MuslimWills",
      description:
        "Developed a secure, Islamic-compliant wills platform that simplifies estate planning. Built with Next.js and Sanity.io for content management, featuring pixel-perfect UI with advanced animations using Motion for React while maintaining optimal web performance.",
      tags: ["Next.js", "Motion for React", "Tailwind CSS", "Sanity.io"],
      images: ["/muslim-1", "/muslim-2", "/muslim-3"],
      link: "https://www.muslimwills.com.au/",
    },
    {
      title: "Awqaf Australia",
      description:
        "Collaborated with Fullsuite Agency to develop a charitable waqf platform enabling users to establish and donate to waqfs. Implemented pixel-perfect design with Next.js, dynamic content schema using Sanity CMS, and secure payment integration with Stripe.",
      tags: ["Next.js", "Sanity", "Stripe", "Fullstack"],
      images: ["/awqaf-1", "/awqaf-2", "/awqaf-3"],
      link: "https://awqaf.org.au",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <ProjectCarousel images={project.images} title={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                {project.link && (
                  <div className="mb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Visit Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
