"use client"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/lib/projects"

const stats = [
  { big: "6+", small: "Years of experience" },
  { big: "10+", small: "Corporate platforms shipped" },
  { big: "Bali", small: "Indonesia · Open to remote" },
]

export function Hero() {
  const reduced = useReducedMotion()
  const up = (d: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  })
  return (
    <section id="top" aria-labelledby="hero-name" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#5a5a5a_0%,#1a1a1a_35%,#000_65%)]" aria-hidden />
      <div className="mg-rings absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 md:px-10">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <motion.p {...up(0.1)} className="mg-title order-2 text-xl md:order-1 md:pt-10 md:text-2xl">
            Frontend engineering for products people actually enjoy using.
          </motion.p>
          <motion.div {...up(0)} className="relative order-1 mx-auto h-[340px] w-[240px] md:order-2 md:h-[440px] md:w-[300px]">
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white/90 via-white/60 to-transparent" aria-hidden />
            <Image
              src="/profile.jpg"
              alt="Portrait of Chlaudya Margareta, smiling, wearing a black top"
              fill
              priority
              sizes="(max-width: 768px) 240px, 300px"
              className="rounded-t-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
            />
          </motion.div>
          <motion.div {...up(0.2)} className="order-3 md:pt-10">
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Hi, I&apos;m Chlaudya — a senior frontend engineer in Bali building React &amp; TypeScript platforms,
              admin dashboards, and payment integrations for global teams.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="#contact" className="mg-pill bg-white text-black hover:bg-white/85">Get in touch <ArrowUpRight className="size-3.5" aria-hidden /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="mg-pill mg-pill-ghost">LinkedIn</a>
            </div>
          </motion.div>
        </div>

        <motion.h1
          id="hero-name"
          {...up(0.3)}
          className="font-hero relative mt-10 text-center text-[17vw] italic leading-[0.85] tracking-tight md:-mt-28 md:text-[11.5vw]"
        >
          Chlaudya Margareta
        </motion.h1>

        <motion.div {...up(0.4)} className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-2xl leading-snug md:text-4xl">
            Building fast, polished React, Next.js and TypeScript experiences — engineered for performance and engagement.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60">
            Detail-oriented frontend engineer with 6+ years in React, TypeScript, and modern JavaScript stacks — 10+ corporate
            platforms and admin dashboards shipped, with a 30% lift in user engagement. I move fast with AI-assisted
            development, payment integrations, and motion-rich UI in global, cross-functional teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <a href="#contact" className="mg-pill mg-pill-ghost">Start a conversation</a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="mg-pill mg-pill-ghost">GitHub</a>
            <a href="#projects" className="mg-pill mg-pill-ghost">Explore all projects</a>
          </div>
        </motion.div>

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
