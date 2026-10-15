import { Nav } from "@/components/mg/nav"
import { Hero } from "@/components/mg/hero"
import { Projects } from "@/components/mg/projects"
import { TechStack } from "@/components/mg/tech-stack"
import { Workflow } from "@/components/mg/workflow"
import { Experience } from "@/components/mg/experience"
import { ContactCta } from "@/components/mg/cta"
import { Footer } from "@/components/mg/footer"
import { StackSection } from "@/components/mg/stack"

export default function Home() {
  return (
    <>
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <Nav />
      <main className="bg-black">
        <StackSection index={0} rounded={false}>
          <Hero />
        </StackSection>
        <StackSection index={1} tone="light">
          <Projects />
        </StackSection>
        <StackSection index={2} tone="charcoal">
          <TechStack />
        </StackSection>
        <StackSection index={3} tone="stone">
          <Workflow />
        </StackSection>
        <StackSection index={4} tone="dark">
          <Experience />
        </StackSection>
        <StackSection index={5} rounded={false}>
          <ContactCta />
        </StackSection>
      </main>
      <Footer />
    </>
  )
}
