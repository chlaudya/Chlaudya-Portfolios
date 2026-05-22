# Chlaudya Margareta — Portfolio

Personal portfolio site for **Chlaudya Margareta**, Senior Frontend Engineer. Single-page experience with scroll-driven motion, project showcases, skills, and a contact form.

**Live stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion · shadcn/ui

## Features

- Animated hero with gradient mesh, floating feature tiles, and CV-aligned metrics
- Bento-style project gallery with image carousels
- Skills grid including AI & automation tooling
- Dark / light theme toggle
- Contact form via [Resend](https://resend.com) API route
- Accessible motion (`prefers-reduced-motion` respected)

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install & run

```bash
npm install --legacy-peer-deps
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Environment variables

Create `.env.local` from `.env.example`:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact emails |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |
| `RESEND_FROM_EMAIL` | Verified sender (use `onboarding@resend.dev` for testing) |

Without these, the contact form returns a configuration error.

## Project structure

```
app/                 # Next.js App Router (layout, page, API routes)
components/          # UI sections (hero, projects, skills, contact, …)
components/motion/   # Reveal, counters, gradient button
components/ui/       # shadcn/ui primitives
lib/                 # projects data, skills data, animations
public/              # Static assets (project screenshots)
```

Project copy and image paths live in [`lib/projects.ts`](lib/projects.ts).

## Project screenshots

Screenshots are served from `public/` (extensionless JPEG/PNG files):

| Project | Files |
|---------|-------|
| NGBlu | `ngblu-1` … `ngblu-5` |
| BFI | `bfi-1` … `bfi-3` |
| Amar Bank | `tunaiku-1` … `tunaiku-3` |
| MuslimWills | `muslim-1` … `muslim-3` |
| Awqaf | `awqaf-1` … `awqaf-3` |

Missing images fall back to `/placeholder-project.svg`.

## Deploy

Works on [Vercel](https://vercel.com) out of the box. Set the same environment variables in the project dashboard before enabling the contact form.

## Contact

**Chlaudya Margareta** — mamuaya.chlaudya@gmail.com  
Bali, Indonesia

- [GitHub](https://github.com/chlaudya)
- [LinkedIn](https://www.linkedin.com/in/margareta-ch-a50434118/)
