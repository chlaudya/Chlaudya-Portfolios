"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/lib/projects"

const stats = [
  { big: "6+", small: "Years of experience" },
  { big: "10+", small: "Corporate platforms shipped" },
  { big: "Bali", small: "Indonesia, open to remote" },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#5a5a5a_0%,#1a1a1a_35%,#000_65%)]" aria-hidden />
      <div className="mg-rings absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 md:px-10">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <p className="mg-title order-2 text-xl md:order-1 md:pt-10 md:text-2xl">
            I build the React screens that banks, lenders and charities run on.
          </p>
          <div className="relative order-1 mx-auto h-[340px] w-[240px] md:order-2 md:h-[440px] md:w-[300px]">
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white/90 via-white/60 to-transparent" aria-hidden />
            <Image
              src="/profile.jpg"
              alt="Portrait of Chlaudya Margareta, smiling, wearing a black top"
              fill
              priority
              sizes="(max-width: 768px) 240px, 300px"
              className="rounded-t-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
            />
          </div>
          <div className="order-3 md:pt-10">
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Senior frontend engineer in Bali. Over six years I&apos;ve built for a digital bank, a listed lender, NGBlu Networks in the Netherlands, and MuslimWills and Awqaf in Australia.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="#contact" className="mg-pill bg-white text-black hover:bg-white/85">Get in touch <ArrowUpRight className="size-3.5" aria-hidden /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="mg-pill mg-pill-ghost">LinkedIn</a>
            </div>
          </div>
        </div>

        <h1
          id="hero-name"
         
          className="font-hero relative mt-10 text-center text-[17vw] italic leading-[0.85] tracking-tight md:-mt-28 md:text-[11.5vw]"
        >
          Chlaudya Margareta
        </h1>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-2xl leading-snug md:text-4xl">
            Fast React and Next.js sites, tested before they ship.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60">
            At BFI Finance my back-office tools cut data entry by 70%, and at Amar Bank I improved the landing site&apos;s performance by 50%. Now I lead a frontend team at Itsavirus. Claude Code and Cursor draft my prototypes, tests and refactors, and code review catches what they miss.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <a href="#contact" className="mg-pill mg-pill-ghost">Start a conversation</a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="mg-pill mg-pill-ghost">GitHub</a>
            <a href="#projects" className="mg-pill mg-pill-ghost">Explore all projects</a>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 border-y border-white/10 py-6 text-center sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {stats.map((s) => (
            <li key={s.small} className="py-3">
              <p className="mg-title text-4xl md:text-5xl">{s.big}</p>
              <p className="mg-eyebrow mt-2 text-white/50">{s.small}</p>
            </li>
          ))}
        </ul>
        <div className="h-24" />
      </div>
    </section>
  )
}
