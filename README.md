# Nicolas Perrin — Portfolio

Personal freelance portfolio / landing page.
**Senior Backend Engineer — Java / Spring Boot, with an AI-engineering edge.**

Premium, single-page site. Dark, minimal, fast.

## Stack

- **React 18 + TypeScript**
- **Vite 5** (build & dev server)
- **Tailwind CSS 3** (design system in `tailwind.config.js` + `src/index.css`)
- **Framer Motion** (scroll reveals, respects `prefers-reduced-motion`)

Fully static output — deployable to any static host (Netlify, Vercel, Cloudflare Pages, or a Caddy/nginx VPS).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks then emits static site to dist/
npm run preview  # preview the production build
```

## Content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — edit there to update the CV,
experience, skills, projects and contact details. The downloadable CV is `public/Nicolas-Perrin-CV.pdf`.

## Structure

```
src/
  App.tsx                 # section composition
  components/
    Nav, Hero, TrustBar, About, Expertise,
    Experience, Work, Contact, Footer
    Section.tsx           # shared section shell (eyebrow + title)
    Reveal.tsx            # scroll-reveal wrapper
    icons.tsx             # inline SVG icons
  data/content.ts         # single source of truth for all content
```
