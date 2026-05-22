import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HeroMetrics } from "@/components/hero-metrics"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 page-ambient pointer-events-none -z-10" aria-hidden />
      <Header />
      <main>
        <Hero />
        <HeroMetrics />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
