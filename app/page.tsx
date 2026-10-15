import { Nav } from "@/components/mg/nav"
import { Hero } from "@/components/mg/hero"
import { Projects } from "@/components/mg/projects"
import { TechStack } from "@/components/mg/tech-stack"
import { Workflow } from "@/components/mg/workflow"
import { Experience } from "@/components/mg/experience"
import { ContactCta } from "@/components/mg/cta"
import { Footer } from "@/components/mg/footer"

export default function Home() {
  return (
    <>
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <Nav />
      <main className="bg-black">
        <Hero />
        <div className="mg-section-light relative z-10 -mt-12">
          <Projects />
          <TechStack />
          <Workflow />
          <Experience />
        </div>
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
