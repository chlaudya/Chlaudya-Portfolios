import { Rise, SectionHead } from "./reveal"

const steps = [
  { t: "Discover & Scope", d: "I sit with product, design and backend before anyone writes code, so the requirements are clear before the first line." },
  { t: "UI Architecture & Design Systems", d: "Reusable React and TypeScript components in Next.js and Tailwind, matched to the design, with motion where it helps." },
  { t: "Integrate & Automate", d: "Sanity for content, Stripe for payments, REST or GraphQL for the rest. Claude, Cursor and n8n take the repetitive parts." },
  { t: "Test, Optimize & Ship", d: "Tests first with Jest, Vitest and React Testing Library. Then a Core Web Vitals pass, and I walk the team through the release." },
]

export function Workflow() {
  return (
    <section aria-labelledby="workflow-title" className="px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHead id="workflow-title" eyebrow="Engineering &" title="Workflow"
          intro="How a feature gets from a ticket to production." />
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
