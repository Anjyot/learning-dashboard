# NovaLearn - Quick Reference Card

## Start Here

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local
cp .env.example .env.local

# 3. Add Supabase credentials to .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# 4. Set up Supabase database (see SUPABASE_SETUP.md)

# 5. Run development server
npm run dev

# 6. Visit http://localhost:3000
```

## File Locations (Most Important)

```
💻 Pages
  └─ src/app/page.tsx              ← Main dashboard

🎨 Components
  ├─ src/components/dashboard/     ← Dashboard tiles
  ├─ src/components/layout/        ← Navigation
  ├─ src/components/ui/            ← Reusable UI
  └─ src/components/animations/    ← Motion components

⚙️ Configuration
  ├─ tailwind.config.ts            ← Styles
  ├─ .env.example                  ← Environment
  ├─ tsconfig.json                 ← TypeScript
  └─ next.config.js                ← Next.js

📚 Database
  └─ SUPABASE_SETUP.md             ← DB instructions
```

## Common Commands

```bash
npm run dev           # Development server
npm run build         # Production build
npm run start         # Start production
npm run lint          # Check code quality
npm run type-check    # TypeScript validation
```

## Key Files to Customize

| File | Purpose | How to Change |
|------|---------|---------------|
| `src/constants/colors.ts` | Color palette | Edit color hex values |
| `src/constants/mockData.ts` | Mock data | Change user name, stats |
| `src/components/dashboard/HeroTile.tsx` | Welcome message | Edit title and text |
| `tailwind.config.ts` | Global styles | Add/modify utilities |
| `.env.local` | Environment | Add database credentials |

## Component Tree

```
App
 ├─ DashboardShell
 │  ├─ Sidebar (desktop)
 │  ├─ MobileNav (mobile)
 │  └─ main
 │     └─ BentoGrid
 │        ├─ HeroTile
 │        ├─ ActivityTile
 │        ├─ CourseCard × 4
 │        ├─ StatisticsTile
 │        └─ LearningGoalTile
```

## Responsive Breakpoints

```
Mobile:   < 768px    → 1 column, bottom nav
Tablet:   768-1024   → 2 columns, sidebar icons
Desktop:  ≥ 1024px   → 4 columns, full sidebar
```

## Database Table Schema

```sql
CREATE TABLE courses (
  id           UUID PRIMARY KEY,
  title        TEXT NOT NULL,
  progress     INTEGER (0-100),
  icon_name    TEXT,
  created_at   TIMESTAMP
);

Icons: Code, Brain, Rocket, Network, BookOpen, GraduationCap
```

## Animation Timings

- **Fast**: 0.15s (hover effects)
- **Normal**: 0.3s (transitions)
- **Medium**: 0.5s (page entrance)
- **Slow**: 0.8s (floating effects)

All use Framer Motion with spring physics.

## Color Palette

```
Background:   #09090B  (almost black)
Card:         #18181B  (dark gray)
Text:         #FFFFFF  (white)
Secondary:    #A1A1AA  (light gray)
Purple:       #8B5CF6  (vibrant purple)
Cyan:         #06B6D4  (bright cyan)
Success:      #22C55E  (green)
```

## Deployment Checklist

- [ ] Run `npm run build` locally
- [ ] Run `npm run type-check`
- [ ] Run `npm run lint`
- [ ] All 3 commands pass
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Add environment variables
- [ ] Deploy

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't start dev server | Run `npm install` again |
| Courses not loading | Check Supabase URL and key in .env.local |
| TypeScript errors | Run `npm run type-check` to see details |
| Build fails | Run `npm run lint` and fix errors |
| Slow animations | Clear cache: Ctrl+Shift+R |
| Mobile layout broken | Test on actual phone, not devtools |

## Key Features

✅ **Dashboard**: Overview with bento grid layout
✅ **Courses**: Track progress with animated bars
✅ **Activity**: GitHub-style contribution graph
✅ **Statistics**: Animated counter display
✅ **Goals**: Weekly and monthly tracking
✅ **Responsive**: Desktop, tablet, mobile
✅ **Animations**: Smooth Framer Motion effects
✅ **Dark Mode**: Premium dark theme only
✅ **Loading**: Beautiful skeleton states
✅ **Error Handling**: Graceful error pages

## Performance Targets

- **Lighthouse**: 95+ all metrics
- **Core Web Vitals**: All green
- **TTI**: < 2 seconds
- **CLS**: < 0.1

## Important Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL        ← Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY   ← Your Supabase public API key
```

Both are public (safe to expose in frontend).

## Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete guide |
| `SETUP.md` | Quick start |
| `DEPLOYMENT.md` | Vercel deployment |
| `SUPABASE_SETUP.md` | Database setup |
| `CHECKLIST.md` | Verification |
| `PROJECT_SUMMARY.md` | Overview |

## Component Props

```typescript
// CourseCard
interface CourseCardProps {
  course: Course;
  delay?: number;
}

// ProgressBar
interface ProgressBarProps {
  value: number;
  label?: string;
}

// Counter
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
}
```

## TypeScript Strict Mode

- ✅ No `any` types
- ✅ Strict null checks
- ✅ All properties required
- ✅ Full type safety

## Code Quality

- ✅ ESLint: Configured
- ✅ TypeScript: Strict mode
- ✅ Comments: Present
- ✅ Errors: Handled
- ✅ Performance: Optimized

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase Docs](https://supabase.com/docs)

## Before Pushing to Production

1. ✅ `npm run type-check` - passes
2. ✅ `npm run lint` - no errors
3. ✅ `npm run build` - succeeds
4. ✅ Test on mobile
5. ✅ Test in Firefox/Safari
6. ✅ Lighthouse > 90
7. ✅ Database backups enabled
8. ✅ Environment variables set

## Useful Terminal Commands

```bash
# Check for type errors
npm run type-check

# Format code
npm run lint

# Rebuild everything
rm -rf .next node_modules && npm install

# Check outdated packages
npm outdated

# Update packages
npm update

# Clean build
npm run build

# Analyze bundle
npm install --save-dev @next/bundle-analyzer
```

## Icon Names (for database)

Use these values in `icon_name` column:
- `Code` - for programming courses
- `Brain` - for algorithm/DSA
- `Rocket` - for advanced courses
- `Network` - for system design
- `BookOpen` - default fallback
- `GraduationCap` - for certifications

## Next.js App Router Basics

```
app/
├── page.tsx        → /
├── layout.tsx      → Root layout
├── courses/
│   └── page.tsx    → /courses
├── progress/
│   └── page.tsx    → /progress
└── [dynamic]/
    └── page.tsx    → /[dynamic]
```

## Git Commands

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Regular workflow
git add .
git commit -m "Description"
git push origin main
```

## Need Help?

1. Check the `README.md` for detailed docs
2. Check `SETUP.md` for quick start
3. Check `DEPLOYMENT.md` for production
4. Check inline code comments
5. Check Troubleshooting section above

---

**Quick Start**: `npm install && npm run dev` → Visit `http://localhost:3000`

**Deploy**: Push to GitHub → Connect to Vercel → Done! 🚀
