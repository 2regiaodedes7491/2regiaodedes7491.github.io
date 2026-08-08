# AGENTS.md — Stavya Srinath Portfolio

## Project Objective
Build a production-quality developer portfolio for Stavya Srinath — high-school robotics engineer, electrical systems lead, student leader, STEM educator, Sanskrit instructor, environmental organization founder, and classical dancer.

**Central Narrative:** *Stavya builds systems — and builds people around those systems.*

## Technology Stack
- Next.js 16.3 (App Router, React 19.2, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme inline`, OKLCH tokens)
- Motion (Framer Motion successor) for animations
- shadcn/ui (new-york style, Radix primitives)
- Lucide React icons
- next-themes (dark/light, system-aware)
- pnpm 10.29
- Vercel (deployment)

## Architecture Rules
- **Server Components by default** — only use `'use client'` where interactivity requires it
- **Content-first** — all data lives in `content/*.ts`, components consume typed data
- **Component granularity** — no component > 200 lines; compose via `Section`, `Card`, `Grid` primitives
- **Route structure** — per `ARCHITECTURE.md`; deep routes only when content warrants
- **Static rendering** — prefer `generateStaticParams` for dynamic routes; no backend, no DB, no auth

## Design Rules
- Dark-first visual system with light mode support
- OKLCH color palette: near-black bg, electric violet/indigo primary, cyan/blue secondary, warm magenta accent
- Gradient tokens: `--gradient-hero`, `--gradient-glow`, `--gradient-border`
- Typography: Geist Sans (display/body), Geist Mono (technical labels, metadata)
- Border language: 8–12% white borders, 3–6% fills
- Glassmorphism: sparing (nav, overlays only)
- Engineering motifs: subtle circuit traces, node graphs, coordinate grids — implicit, not decorative

## Animation Philosophy (Motion)
Four categories only: entrance, scroll, interaction, environment
- Defaults: 0.4–0.8s, easeOut/spring, 4–24px translate, 0.98–1.02 scale
- **Never**: constant bounce, large rotations, excessive parallax, scroll hijacking, 2s+ transitions
- **Reduced motion**: `prefers-reduced-motion` respected globally — remove parallax, decorative motion, reduce transforms, preserve opacity transitions

## Content Accuracy Rules (Critical)
- **VERIFIED**: Directly in résumé or supplied sources → publish
- **EXTERNALLY VERIFIED**: Supported by public source (TBA, Chief Delphi, team2813.com, Green Ninja, Tabla Niketan PDFs) → publish with link
- **NEEDS CONFIRMATION**: Mentioned in drafts but unsupported → omit or mark clearly as "supporting evidence"
- **NEVER invent**: awards, metrics, titles, dates, competition results, project capabilities, adoption numbers, GitHub repos, testimonials

## Accessibility Rules
- Semantic HTML, proper heading hierarchy (h1→h2→h3)
- Keyboard navigation for all interactive elements
- Visible focus states (`focus-visible:ring-2 focus-visible:ring-ring`)
- Alt text for all images/media
- Sufficient contrast (WCAG AA minimum)
- No hover-only critical information
- ARIA only when native HTML insufficient

## Performance Rules
- Static generation wherever possible
- `next/image` for all images (proper sizing, lazy loading)
- Minimal client JS — avoid giant animation bundles
- No unnecessary WebGL/Three.js
- Optimized fonts (next/font self-hosted)
- Target: LCP excellent, CLS ~0, INP excellent

## Git Conventions
- Small, atomic commits with conventional prefixes: `feat:`, `fix:`, `style:`, `perf:`, `refactor:`, `docs:`, `chore:`
- No `update stuff`, `changes`, `final`, `wip`
- Each phase = separate commit(s)

## Commands
```bash
pnpm dev          # Development server (Turbopack)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
```

## What Not To Do
- Invent facts, metrics, testimonials, projects, employers, awards
- Use excessive 3D/WebGL
- Make everything a client component
- Duplicate content across components
- Create backend/API layer
- Turn every résumé bullet into a card
- Make it look like a SaaS landing page or AI-generated template