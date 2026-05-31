# NovaLearn – Next Generation Learning Dashboard

A premium, futuristic learning dashboard built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**. Designed to help students track learning progress, course completion, daily learning streaks, achievements, activity history, and study goals.

> **Design quality targets**: Linear, Vercel Dashboard, Stripe, Arc Browser, Raycast, Notion, GitHub Insights.

![Dark Mode Only](https://img.shields.io/badge/Theme-Dark%20Mode-1a1a2e?style=flat-square)
![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-purple?style=flat-square)

---

## Features

- **Bento Grid Dashboard** – Modern card-based layout with glassmorphism, gradient borders, and noise textures
- **Hero Section** – Animated gradient mesh background with floating glow effects and stat counters
- **Course Tracking** – Track progress across multiple courses with animated progress bars
- **Activity Graph** – GitHub-style contribution heatmap with 7-day/30-day/monthly views
- **Statistics Tile** – Animated counter widgets showing key metrics
- **Learning Goals** – Circular progress ring with weekly/monthly hour tracking
- **Achievements Gallery** – Rarity-based badge system (Common → Legendary)
- **Progress Analytics** – Weekly activity bar chart, milestone timeline, per-course breakdown
- **Settings** – Profile management, notification toggles with spring animations
- **Fully Responsive** – Desktop (4-col), Tablet (2-col with collapsed sidebar), Mobile (1-col with bottom nav)
- **Smooth Animations** – Staggered page load, spring physics, hover micro-interactions

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | App Router, Server Components, SSR |
| React 18 | UI Components |
| TypeScript | Type Safety (Strict Mode) |
| Tailwind CSS 3.4 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Supabase | PostgreSQL database (optional) |
| Lucide React | Icon system |

---

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard (Server Component)
│   ├── layout.tsx         # Root layout with metadata
│   ├── loading.tsx        # Skeleton loading state
│   ├── error.tsx          # Error boundary with retry
│   ├── courses/           # Courses page with search & filter
│   ├── achievements/      # Achievement badge gallery
│   ├── progress/          # Analytics & milestones
│   └── settings/          # Account & notification settings
├── components/
│   ├── layout/            # Sidebar, MobileNav, DashboardShell
│   ├── dashboard/         # HeroTile, CourseCard, BentoGrid, etc.
│   ├── animations/        # MotionWrapper, FadeUp, StaggerContainer
│   └── ui/                # Card, Badge, Counter, Glow, Skeleton
├── lib/                   # Supabase client, data fetching
├── hooks/                 # useMediaQuery, useMounted
├── constants/             # Navigation, mock data, colors
├── types/                 # TypeScript interfaces
└── utils/                 # cn(), iconMapper, animations, percentage
```

### Rendering Strategy

- **Server Components**: Dashboard page, course fetching, layout
- **Client Components**: Animations (Framer Motion), sidebar interaction, mobile navigation, progress bars

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nova-learn

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs immediately with **mock data** — no Supabase setup required.

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

---

## Supabase Setup (Optional)

### 1. Create a Supabase Project

Go to [supabase.com](https://supabase.com) and create a new project.

### 2. Create the Database Table

Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL CHECK(progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code'),
  ('System Design Fundamentals', 60, 'Network'),
  ('DSA in C++', 90, 'Brain'),
  ('Next.js Mastery', 45, 'Rocket');
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app automatically detects Supabase configuration and switches from mock data to live data.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | No | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Supabase anonymous key |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `background-primary` | `#09090B` | Page background |
| `background-secondary` | `#111113` | Secondary surfaces |
| `background-card` | `#18181B` | Card backgrounds |
| `accent-purple` | `#8B5CF6` | Primary accent |
| `accent-cyan` | `#06B6D4` | Secondary accent |
| `accent-indigo` | `#6366F1` | Tertiary accent |

### Glassmorphism

All cards use: `backdrop-blur-xl` + `bg-white/[0.03]` + `border-white/10`

### Animation Principles

- GPU-accelerated transforms only (`translate`, `scale`, `opacity`)
- Spring physics (stiffness: 300, damping: 20)
- Staggered entrance (0.15s between children)
- Max animation duration: 1.2s

---

## Deployment (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "NovaLearn dashboard"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables (if using Supabase)
4. Deploy

### 3. Environment Variables on Vercel

Add these in **Project Settings → Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Performance Optimizations

- **Server Components** for data fetching (zero client JS for static content)
- **Tree-shaking** for lucide-react and framer-motion via `optimizePackageImports`
- **GPU-accelerated animations** using transform and opacity only
- **Responsive images** with next/image optimization
- **Code splitting** via Next.js automatic route-based splitting
- **Stale-while-revalidate** with 60-second cache for course data

---

## License

MIT
