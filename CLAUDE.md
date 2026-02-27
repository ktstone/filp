# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
```

## Architecture

**Next.js 16 App Router** with React 19, TypeScript (strict), Tailwind CSS 4, and shadcn/ui.

All pages are client components (`"use client"`) since most require interactivity. Page components live in `src/components/` as `*-page.tsx` files, imported by thin `src/app/**/page.tsx` route files.

### Path alias

`@/*` maps to `./src/*`

### Key directories

- `src/app/` — Routes and layout. Includes `sitemap.ts` and `robots.ts` for SEO.
- `src/components/` — Page-level components and shared UI.
- `src/components/ui/` — shadcn/ui primitives (Button, Sheet, Tabs, Carousel).
- `src/hooks/` — Custom hooks. `useReveal()` provides scroll-triggered IntersectionObserver animations.
- `src/lib/` — Utilities. `cn()` for class merging, `venues.ts` for venue data/types.

### Routes

- `/` — Homepage (home-page.tsx)
- `/events` — Live music schedule (events-page.tsx)
- `/menu/lunch-dinner`, `/menu/brunch`, `/menu/late-night` — Menu pages (menu-page.tsx)
- `/private-events` — Private events landing (private-events-page.tsx)
- `/private-events/[slug]` — Dynamic venue detail (venue-detail-page.tsx)
- `/vip-packages` — Bachelor/bachelorette packages (vip-packages-page.tsx)
- `/vip-reservations` — VIP table booking (vip-reservations-page.tsx)
- `/careers` — Job application with file upload (careers-page.tsx)
- `/faq` — Accordion FAQ (faq-page.tsx)

### Styling & Theme

Custom color tokens defined in `src/app/globals.css`:
- `honky-bg` (#1a1a1a) — dark background
- `honky-red` (#ef464f) — primary accent
- `honky-teal` (#5ec4b6) — secondary accent

Custom CSS utilities in globals.css:
- `.neon-text` — Glowing text effect with breathing animation via `::after` pseudo-element
- `@keyframes fadeInUp` — Scroll-reveal entrance animation
- `@keyframes neon-breathe` — Pulsing opacity for neon glow

Fonts loaded in layout.tsx: **Spline Sans** (body) and **Epilogue** (headings, via `font-heading` class).

### Shader Effects

The `shaders` package provides WebGL aurora effects via `<Shader>` and `<Aurora>` components from `shaders/react`. These are used as absolute-positioned overlays with `mix-blend-screen` and `opacity-60` on hero sections and CTA sections. Each instance uses a unique `seed` prop for variation.

### Venue Data

`src/lib/venues.ts` exports a `venues` array with 12 event spaces, each containing slug, capacity, gallery images, floor plans, accent colors, and booking URLs. Venue locations are color-coded: red for Honky Tonk, teal for The Oasis, gold for 3rd Floor.

### Events Schedule

The events page fetches `/schedule.json` at runtime and includes real-time "Live Now" detection by comparing current time against show times.

### Forms

Forms use Netlify Forms integration (`data-netlify="true"` attribute, hidden form-name input, fetch POST to the page URL with `x-www-form-urlencoded` encoding). Three forms exist: VIP inquiry, VIP reservations, and careers application.

### SEO

Root layout includes comprehensive metadata, OpenGraph/Twitter cards, and Schema.org JSON-LD (BarOrPub type) with structured business data.
