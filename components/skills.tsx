export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React Js", "HTML/CSS", "Vite"],
    },
    {
      category: "Backend & Database",
      skills: ["Node Js", "Express", "MongoDB"],
    },
    {
      category: "Mobile Development",
      skills: ["React Native", "Dart", "Flutter"],
    },
    {
      category: "Best Practices",
      skills: [
        "Test Driven Development",
        "Jest",
        "Vitest",
        "RTL",
        "Web Performance Optimization",
        "Source Control",
        "Agile",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
