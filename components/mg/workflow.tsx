import { Rise, SectionHead } from "./reveal"

const steps = [
  { t: "Discover & Scope", d: "Working with product, design and backend early in an agile cadence to clarify requirements before code is written." },
  { t: "UI Architecture & Design Systems", d: "Building reusable React + TypeScript components and pixel-perfect, motion-rich interfaces with Next.js and Tailwind." },
  { t: "Integrate & Automate", d: "Wiring CMS (Sanity), payments (Stripe) and APIs, and using AI-assisted development and n8n to move faster." },
  { t: "Test, Optimize & Ship", d: "TDD with Jest, Vitest and RTL, Core Web Vitals and performance tuning, and mentoring the team through release." },
]

export function Workflow() {
  return (
    <section aria-labelledby="workflow-title" className="px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHead id="workflow-title" eyebrow="Engineering &" title="Workflow"
          intro="How I take a feature from requirements to production." />
        <ol className="divide-y divide-[var(--mg-line)] border-t border-[var(--mg-line)]">
          {steps.map((s, i) => (
            <li key={s.t}>
              <Rise delay={i * 0.06} className="flex items-start justify-between gap-6 py-6">
                <div>
                  <h3 className="mg-title text-xl md:text-2xl">{s.t}</h3>
                  <p className="mt-3 max-w-xl text-sm text-[var(--mg-medium)]">{s.d}</p>
                </div>
                <span className="mg-eyebrow rounded border border-[var(--mg-line)] bg-[var(--mg-surface)] px-2 py-1.5">0{i + 1}</span>
              </Rise>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
