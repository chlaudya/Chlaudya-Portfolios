"use client"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "stack" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact", cta: true },
]

/** Scrollspy: the active section is the last one whose top has passed 40% of the viewport.
 *  Works with sticky/pinned panels (a pinned section's top stays <= 0 until the next one covers it). */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.4
      let current: string | null = null
      for (const { id } of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return active
}

/** Document Y of the stacked wrapper holding `id`. Measured from the flow (main top + preceding
 *  wrapper heights + margins) because sticky/pinned wrappers report their stuck position. */
function sectionTop(id: string): number | null {
  const el = document.getElementById(id)
  const main = el?.closest("main")
  if (!el || !main) return null
  const wrapper = [...main.children].find((c) => c.contains(el)) as HTMLElement | undefined
  if (!wrapper) return null
  let y = main.getBoundingClientRect().top + window.scrollY
  for (const c of [...main.children] as HTMLElement[]) {
    // Pinned wrappers carry the panel's negative top margin on their first child (it collapses through).
    const own = parseFloat(getComputedStyle(c).marginTop) || 0
    const inner = c.firstElementChild ? parseFloat(getComputedStyle(c.firstElementChild).marginTop) || 0 : 0
    y += own || inner
    if (c === wrapper) break
    y += c.offsetHeight
  }
  return Math.round(y)
}

function scrollToSection(id: string) {
  const y = sectionTop(id)
  if (y == null) return false
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" })
  return true
}

/** Glass surface as inline styles so it can never go missing with a stale/partial stylesheet.
 *  `.mg-glass` in globals.css only adds the opaque @supports fallback. */
const glassStyle: CSSProperties = {
  backgroundColor: "rgb(11 11 11 / 0.75)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  boxShadow: "0 8px 32px -8px rgb(0 0 0 / 0.4), inset 0 0 0 1px rgb(255 255 255 / 0.1)",
}

const linkBase = "mg-focus rounded-full px-3 py-1.5 text-xs transition-colors"
function linkClass(active: boolean, cta?: boolean) {
  if (cta) return cn(linkBase, "bg-[#f5f3f1] font-medium text-[#0b0b0b] hover:bg-white")
  return cn(linkBase, active ? "bg-white/10 text-white" : "text-white/85 hover:text-white")
}

export function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus() }
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!menuRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick) }
  }, [open])

  // Direct hash loads (e.g. /#experience): align once layout has settled.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!items.some((i) => i.id === id)) return
    const t = window.setTimeout(() => {
      const y = sectionTop(id)
      if (y != null) window.scrollTo({ top: y, behavior: "auto" })
    }, 50)
    return () => window.clearTimeout(t)
  }, [])

  const link = (i: (typeof items)[number], className: string, onClick?: () => void) => (
    <a
      href={`#${i.id}`}
      aria-current={active === i.id ? "true" : undefined}
      className={className}
      onClick={(e) => {
        onClick?.()
        if (scrollToSection(i.id)) {
          e.preventDefault()
          history.pushState(null, "", `#${i.id}`)
          const target = document.getElementById(i.id)
          if (target) {
            if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1")
            target.focus({ preventScroll: true })
          }
        }
      }}
    >
      {i.label}
    </a>
  )

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <nav aria-label="Primary" style={glassStyle} className="pointer-events-auto relative flex items-center gap-1 mg-glass rounded-full px-2 py-1.5 text-white">
        <ul className="hidden items-center gap-1 sm:flex">
          {items.slice(0, 2).map((i) => <li key={i.id}>{link(i, linkClass(active === i.id))}</li>)}
        </ul>
        <a
          href="#top"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
            history.replaceState(null, "", "/")
          }} className="mg-focus font-hero mx-1 grid size-9 place-items-center rounded-full border border-white/30 text-sm italic sm:mx-2">CM</a>
        <ul className="hidden items-center gap-1 sm:flex">
          {items.slice(2).map((i) => <li key={i.id}>{link(i, linkClass(active === i.id, i.cta))}</li>)}
        </ul>
        <button
          ref={buttonRef}
          type="button"
          className="mg-focus rounded-full px-3 py-1.5 text-xs text-white/80 hover:text-white sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        {open && (
          <ul
            id="mobile-nav"
            ref={menuRef}
            style={glassStyle}
            className="absolute left-1/2 top-[calc(100%+0.5rem)] w-[min(20rem,calc(100vw-1.5rem))] -translate-x-1/2 space-y-1 mg-glass rounded-3xl p-3 sm:hidden"
          >
            {items.map((i) => (
              <li key={i.id}>
                {link(
                  i,
                  cn(
                    "mg-focus block rounded-2xl px-4 py-3 text-base uppercase tracking-wide",
                    i.cta ? "bg-[#f5f3f1] text-[#0b0b0b]" : active === i.id ? "bg-white/10 text-white" : "text-white/80",
                  ),
                  () => setOpen(false),
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
