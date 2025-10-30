export function Hero() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Chlaudya Margareta</h1>
            <p className="text-lg md:text-xl text-primary font-semibold mb-4">Senior Frontend Engineer</p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Goal and detail-oriented frontend developer with over 5 years of experience. I have developed and launched
              over 10 corporate-centered websites with trendy, user-friendly designs, resulting in a 30% increase in
              user engagement. Passionate about IT and dedicated to continuous learning, I thrive in a collaborative,
              enthusiastic environment conducive to professional growth.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Bali, Indonesia • mamuaya.chlaudya@gmail.com</p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
