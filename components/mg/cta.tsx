"use client"
import { useState } from "react"
import { ArrowUpRight, Check, Copy } from "lucide-react"
import { socialLinks } from "@/lib/projects"
import { ContactForm } from "@/components/contact"
import { Rise } from "./reveal"

export function ContactCta() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(socialLinks.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
  }
  return (
    <section id="contact" aria-labelledby="cta-title" className="bg-black px-3 py-3">
      <div className="mg-section-light px-5 py-24 text-center md:px-10">
        <Rise>
          <span className="mg-chip bg-white">Available for new projects &amp; roles</span>
          <h2 id="cta-title" className="mg-title mx-auto mt-6 max-w-3xl text-5xl md:text-7xl">Let&apos;s build something exceptional together.</h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-[var(--mg-medium)]">
            Have a project in mind? Email me directly or send a message below.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <a href={`mailto:${socialLinks.email}`} className="mg-pill mg-pill-dark">Get in touch <ArrowUpRight className="size-3.5" aria-hidden /></a>
            <button type="button" onClick={copy} className="mg-pill border border-black/15 bg-white text-black hover:bg-black/5">
              {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
              <span className="normal-case tracking-normal">{socialLinks.email}</span>
            </button>
          </div>
          <p role="status" aria-live="polite" className="mt-3 h-4 font-mono text-xs text-[var(--mg-medium)]">{copied ? "Copied to clipboard!" : ""}</p>
        </Rise>
        <Rise delay={0.1} className="mx-auto mt-10 max-w-xl rounded-lg bg-white p-6 text-left ring-1 ring-black/5 md:p-8">
          <ContactForm />
        </Rise>
      </div>
    </section>
  )
}
