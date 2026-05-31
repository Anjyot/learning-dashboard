# 🚀 NovaLearn – Next Generation Learning Dashboard

A premium futuristic learning dashboard built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

NovaLearn helps students and self-learners track learning progress, course completion, learning streaks, achievements, activity history, and study goals through a modern SaaS-inspired experience.

Designed with inspiration from **Linear**, **Vercel**, **Stripe Dashboard**, **Raycast**, **Arc Browser**, **Notion**, and **GitHub Insights**.

---

## 📸 Project Preview

<img width="1918" height="910" alt="Screenshot 2026-05-31 193359" src="https://github.com/user-attachments/assets/e61de196-c47f-41fa-8b3d-971567e1cef9" />

# ✨ Features

## Learning Dashboard

- Personalized welcome experience
- Learning streak tracking
- Active course monitoring
- Learning hours statistics
- Achievement and certificate tracking
- Goal completion insights

## Course Management

- Course progress tracking
- Animated progress bars
- Dynamic course status
- Visual learning indicators
- Responsive course cards

## Analytics & Activity Tracking

- Learning activity graph
- Progress visualization
- Weekly goals
- Monthly goals
- Learning consistency monitoring

## Premium User Experience

- Dark mode only
- Bento grid dashboard
- Glassmorphism design
- Gradient mesh backgrounds
- Smooth Framer Motion animations
- Mobile-first responsive architecture

## Performance Optimized

- React Server Components
- Dynamic imports
- Strict TypeScript
- Optimized rendering
- Lighthouse-friendly architecture

---

# 🎯 Project Vision

Build a premium futuristic learning dashboard that helps students:

- Track courses
- Monitor learning progress
- Maintain learning streaks
- Stay motivated
- Visualize growth
- Build consistency

The goal is to create a dashboard that feels like a professional SaaS product rather than a traditional student project.

---

# 👥 Target Users

## Primary User – Engineering Students

### Age Group

18–25 Years

### Goals

- Track courses
- Track learning progress
- Maintain streaks
- Stay motivated
- Visualize achievements

### Pain Points

- Existing learning platforms feel boring
- Difficult to monitor progress
- Lack of motivation and consistency

---

## Secondary User – Self Learners

### Goals

- Upskill continuously
- Learn new technologies
- Track achievements
- Maintain study consistency
- Monitor personal growth

---

# 🎨 Design Philosophy

NovaLearn follows five core design principles:

### Modern

No outdated UI patterns.

### Premium

Should feel like a high-end SaaS application.

### Fast

Animations should be smooth and responsive.

### Elegant

Minimal clutter with strong visual hierarchy.

### Intelligent

Important information should be visible immediately.

### Focused

Users should instantly understand:

- What they are learning
- Current progress
- Study goals
- Recent activity

---

# 🎨 Design System

## Theme

Dark Mode Only

---

## Color Palette

| Purpose | Color |
|----------|---------|
| Background | #09090B |
| Secondary Background | #111113 |
| Card Surface | #18181B |
| Elevated Surface | #202024 |
| Primary Text | #FFFFFF |
| Secondary Text | #A1A1AA |
| Muted Text | #71717A |
| Purple Accent | #8B5CF6 |
| Cyan Accent | #06B6D4 |
| Indigo Accent | #6366F1 |
| Success | #22C55E |
| Warning | #F59E0B |
| Danger | #EF4444 |

---

## Gradient System

### Hero Background

```css
from-purple-500/20
via-indigo-500/10
to-cyan-500/20
```

### Card Glow

```css
from-purple-500/10
to-cyan-500/10
```

### Progress Bars

```css
from-purple-500
to-cyan-500
```

---

## Typography

### Font Family

```text
Inter, sans-serif
```

### Font Scale

| Type | Utility |
|--------|---------|
| Display | text-4xl font-bold |
| Heading | text-2xl font-semibold |
| Subheading | text-lg font-medium |
| Body | text-sm |
| Caption | text-xs |

---

## Glassmorphism System

Major cards use:

```css
backdrop-blur-xl
bg-white/[0.03]
border border-white/10
```

---

## Shadow System

### Card Shadow

```css
shadow-lg shadow-black/30
```

### Glow Shadow

```css
0 0 40px rgba(139,92,246,0.15)
```

### Hover Glow

```css
0 0 50px rgba(6,182,212,0.2)
```

---

# 🏗 Software Architecture

## Architecture Type

Modern Scalable Frontend Architecture

### Principles

- Separation of Concerns
- Reusable Components
- Type Safety
- Scalability
- Maintainability
- Performance First

---

## Application Flow

```text
User Opens Dashboard

↓

Next.js Server Component

↓

Fetch Courses from Supabase

↓

Validate Data

↓

Transform Data

↓

Pass Data to Components

↓

Render Bento Grid

↓

Animate Components

↓

Interactive Dashboard
```

---

# ⚙️ Tech Stack

## Frontend

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Backend

- Supabase
- PostgreSQL

## Deployment

- Vercel

## Tooling

- ESLint
- TypeScript Strict Mode

---

# 📁 Folder Structure

```text
src

├── app
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   ├── globals.css
│
├── components
│
│   ├── layout
│   │   ├── Sidebar.tsx
│   │   ├── MobileNav.tsx
│   │   └── DashboardShell.tsx
│
│   ├── dashboard
│   │   ├── HeroTile.tsx
│   │   ├── CourseCard.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ActivityTile.tsx
│   │   ├── StatisticsTile.tsx
│   │   ├── LearningGoalTile.tsx
│   │   └── BentoGrid.tsx
│
│   ├── animations
│   │   ├── MotionWrapper.tsx
│   │   ├── FadeUp.tsx
│   │   └── StaggerContainer.tsx
│
│   ├── ui
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Counter.tsx
│   │   ├── Glow.tsx
│   │   └── Skeleton.tsx
│
├── lib
│   ├── supabase.ts
│   ├── getCourses.ts
│   ├── getStats.ts
│   └── validations.ts
│
├── hooks
├── constants
├── types
├── utils
│
└── public
```

---

# 🗄 Database Architecture

## Database

Supabase PostgreSQL

### Courses Table

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Validation Rule

```sql
CHECK(progress >= 0 AND progress <= 100)
```

---

## Seed Data

```sql
INSERT INTO courses
(title,progress,icon_name)

VALUES

('Advanced React Patterns',75,'Code'),
('System Design Fundamentals',60,'Network'),
('DSA in C++',90,'Brain'),
('Next.js Mastery',45,'Rocket');
```

---

# 📝 TypeScript Models

## Course

```ts
export interface Course {
 id: string;
 title: string;
 progress: number;
 icon_name: string;
 created_at: string;
}
```

## Statistics

```ts
export interface Statistics {
 coursesCompleted: number;
 learningHours: number;
 streak: number;
 certificates: number;
}
```

## Activity

```ts
export interface Activity {
 date: string;
 value: number;
}
```

---

# 🔐 Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/novalearn.git
```

## Navigate to Project

```bash
cd novalearn
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 📜 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

# 🎬 Animation System

Powered by Framer Motion.

## Implemented Animations

- Sidebar entrance animation
- Hero tile entrance animation
- Course card hover effects
- Animated progress bars
- Statistics counters
- Goal ring animation
- Activity graph reveal
- Mobile navigation transitions

## Motion Philosophy

- Fast
- Fluid
- Intentional
- GPU Accelerated

---

# 📱 Responsive Design

## Desktop (≥1024px)

- Fixed Sidebar
- 4 Column Bento Grid

## Tablet (768px–1023px)

- Collapsed Sidebar
- 2 Column Grid

## Mobile (<768px)

- Bottom Navigation
- Single Column Layout

---

# ♿ Accessibility

Implemented Accessibility Features:

- Keyboard Navigation
- ARIA Labels
- Focus States
- Screen Reader Support
- High Contrast UI
- Accessible Interactive Components

Target Accessibility Score:

```text
90+
```

---

# ⚡ Performance Optimizations

## Next.js Optimizations

- App Router
- Server Components
- Dynamic Imports

## React Optimizations

- Memoization
- Optimized Re-renders
- Typed Data Flow

## Image Optimizations

- next/image
- Lazy Loading
- Responsive Images

## Lighthouse Targets

| Category | Score |
|-----------|--------|
| Performance | 95+ |
| Accessibility | 90+ |
| Best Practices | 95+ |
| SEO | 90+ |

---

# 🌐 Deployment Guide

## Deploy to Vercel

### Build Locally

```bash
npm run build
```

### Deployment Steps

1. Push repository to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy project

### Required Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Optional Custom Domain

```text
Vercel Dashboard
→ Project Settings
→ Domains
```

---

# ✅ Testing Checklist

Run the following commands:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Expected Result:

- No TypeScript Errors
- No ESLint Errors
- No Build Errors
- All Imports Resolved

---

# 🎯 Project Goals

NovaLearn demonstrates:

- Modern Frontend Engineering
- Next.js App Router
- Server Components
- TypeScript Best Practices
- Supabase Integration
- Framer Motion Animations
- Responsive SaaS UI Development
- Production-Ready Architecture

---

# ✅ Final Verification Checklist

- [x] Next.js App Router
- [x] TypeScript Strict Mode
- [x] Tailwind CSS
- [x] Framer Motion
- [x] Supabase Integration
- [x] Bento Grid Layout
- [x] Responsive Design
- [x] Loading State
- [x] Error State
- [x] Accessibility Support
- [x] Environment Variables
- [x] Vercel Ready

---

# 👨‍💻 Developer

**Anjyot**

Portfolio-grade SaaS dashboard project showcasing modern frontend architecture, scalable development practices, premium UI engineering, performance optimization, and production-ready code quality.

---

### ⭐ If you like this project, consider giving it a star.
