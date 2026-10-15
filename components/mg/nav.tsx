"use client"
import { useState } from "react"
const items = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]
export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav aria-label="Primary" className="mt-0 flex items-center gap-1 rounded-b-3xl bg-black px-3 py-2 text-white shadow-lg">
        <ul className="hidden items-center gap-1 sm:flex">
          {items.slice(0, 2).map((i) => (
            <li key={i.href}><a className="mg-focus rounded-full px-3 py-1.5 text-xs text-white/70 hover:text-white" href={i.href}>{i.label}</a></li>
          ))}
        </ul>
        <a href="#top" aria-label="Chlaudya Margareta — back to top" className="mg-focus font-hero mx-2 grid size-9 place-items-center rounded-full border border-white/30 text-sm italic">CM</a>
        <ul className="hidden items-center gap-1 sm:flex">
          {items.slice(2).map((i) => (
            <li key={i.href}><a className="mg-focus rounded-full px-3 py-1.5 text-xs text-white/70 hover:text-white" href={i.href}>{i.label}</a></li>
          ))}
        </ul>
        <button className="mg-focus px-2 text-xs text-white/80 sm:hidden" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>Menu</button>
      </nav>
      {open && (
        <ul id="mnav" className="absolute top-14 w-[90vw] rounded-3xl bg-black p-4 text-white sm:hidden">
          {items.map((i) => (
            <li key={i.href}><a onClick={() => setOpen(false)} className="mg-focus block py-2 text-lg uppercase" href={i.href}>{i.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
