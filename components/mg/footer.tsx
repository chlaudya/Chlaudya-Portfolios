import { socialLinks } from "@/lib/projects"
export function Footer() {
  return (
    <footer className="bg-black px-5 pb-10 pt-8 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-hero text-3xl italic">Chlaudya Margareta</p>
        <ul className="flex gap-5 text-xs text-white/70">
          <li><a className="mg-focus hover:text-white" href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="mg-focus hover:text-white" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="mg-focus hover:text-white" href={`mailto:${socialLinks.email}`}>Email</a></li>
          <li><a className="mg-focus hover:text-white" href="#top">Back to top ↑</a></li>
        </ul>
        <p className="mg-eyebrow text-white/50">© {new Date().getFullYear()} · Bali, Indonesia</p>
      </div>
    </footer>
  )
}
