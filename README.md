# Friends In Low Places

The official website for **Friends In Low Places** — Nashville's premier honky tonk on Broadway. Live country music on 4 floors, cold beer, and good friends.

**Live site:** [friendsbarnashville.com](https://www.friendsbarnashville.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 with custom theme tokens
- **Components:** shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Effects:** WebGL aurora shaders (`shaders` package)
- **Forms:** Netlify Forms
- **Deployment:** Netlify

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, lineup preview, food section, virtual tour, VIP signup |
| `/events` | Live music schedule with date picker, venue filters, and real-time "Live Now" detection |
| `/menu/*` | Full-text menus (Lunch & Dinner, Brunch, Late Night) with photos and sticky nav |
| `/private-events` | 12 bookable event spaces with filtering, capacity stats, and galleries |
| `/private-events/[slug]` | Individual venue detail with floor plans and photo gallery |
| `/vip-packages` | Bachelor/bachelorette packages with inquiry form |
| `/vip-reservations` | VIP table and group dining reservations |
| `/careers` | Open positions with drag-and-drop application form |
| `/faq` | Categorized accordion FAQ |

## Features

- **Custom WebGL shader effects** on hero sections and CTAs — aurora overlays that mimic stage lighting
- **Neon text breathing animation** — CSS glow effect replicating real neon signage
- **Live music "Now Playing" indicator** with pulsing badge and real-time show detection
- **Scrolling date carousel** for browsing past and upcoming show dates
- **Color-coded venue system** — red (Honky Tonk), teal (The Oasis), gold (3rd Floor)
- **Scroll-reveal animations** via custom `useReveal` IntersectionObserver hook
- **Embedded Matterport 360° virtual tour**
- **Full-text menus** with featured item photography and sticky category navigation
- **Responsive design** with mobile slide-out navigation
- **SEO optimized** with Schema.org JSON-LD, OpenGraph, sitemap, and robots.txt
- **Accessible** — skip links, ARIA labels, semantic HTML, `prefers-reduced-motion` support
