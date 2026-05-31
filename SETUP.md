# Quick Setup Guide

## Installation & First Run (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Set Up Supabase

Create a new table in your Supabase database:

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO courses (title, progress, icon_name) VALUES
('Advanced React Patterns', 75, 'Code'),
('System Design Fundamentals', 60, 'Network'),
('DSA in C++', 90, 'Brain'),
('Next.js Mastery', 45, 'Rocket');
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Project Structure

```
project1/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utilities and libraries
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── constants/       # Constants and config
│   └── types/           # TypeScript types
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── README.md            # Full documentation
```

## Key Features Implemented

✓ **Server Components** - Courses fetched server-side
✓ **Responsive Design** - Mobile, tablet, and desktop layouts
✓ **Animations** - Smooth Framer Motion animations
✓ **Glassmorphism** - Premium card design
✓ **Dark Mode** - Modern dark theme only
✓ **Loading States** - Beautiful skeleton loading
✓ **Error Handling** - User-friendly error pages
✓ **Accessibility** - WCAG compliant
✓ **Type Safety** - Full TypeScript with strict mode

## Component Hierarchy

### Pages
- **Home (`/`)** - Main dashboard with bento grid
- **Courses (`/courses`)** - Course management (stub)
- **Progress (`/progress`)** - Learning analytics (stub)
- **Achievements (`/achievements`)** - Badges (stub)
- **Settings (`/settings`)** - Account settings (stub)

### Layout Components
- **Sidebar** - Desktop navigation (fixed, 280px)
- **MobileNav** - Bottom navigation (mobile only)
- **DashboardShell** - Main layout wrapper

### Dashboard Components
- **BentoGrid** - 4-column responsive grid
- **HeroTile** - Welcome section (2 cols)
- **ActivityTile** - GitHub-style graph (2 cols)
- **CourseCard** - Course progress card
- **StatisticsTile** - Metrics counter (2 cols)
- **LearningGoalTile** - Goal tracker (2 cols)

### UI Components (Reusable)
- **Card** - Glassmorphic card wrapper
- **Badge** - Status badges
- **Counter** - Animated number counter
- **ProgressBar** - Animated progress bar
- **Skeleton** - Loading placeholder
- **Glow** - Floating glow effect

## Responsive Breakpoints

| Breakpoint | Width | Sidebar | Grid | Nav |
|-----------|-------|---------|------|-----|
| Mobile | < 768px | Hidden | 1 col | Bottom |
| Tablet | 768-1024px | Collapsed | 2 cols | Hidden |
| Desktop | ≥ 1024px | Visible | 4 cols | Hidden |

## Animation Details

All animations use Framer Motion with:
- **GPU acceleration** via transform/opacity only
- **Spring physics** for natural motion
- **Stagger effects** for sequential reveals
- **Performance optimized** with will-change
- **Accessible** with prefers-reduced-motion support

### Timing
- Fast: 0.15s
- Normal: 0.3s
- Medium: 0.5s
- Slow: 0.8s

## Performance Targets

- **Lighthouse**: 95+ across all metrics
- **Core Web Vitals**: All green
- **Bundle Size**: < 200KB gzipped
- **Time to Interactive**: < 2 seconds
- **Cumulative Layout Shift**: < 0.1

## Database Schema

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY,           -- Unique identifier
  title TEXT NOT NULL,           -- Course title
  progress INTEGER NOT NULL,     -- 0-100
  icon_name TEXT NOT NULL,       -- Icon identifier
  created_at TIMESTAMP           -- Creation timestamp
);

-- Available icon names:
-- 'Code', 'Brain', 'Rocket', 'Network', 'BookOpen', 'GraduationCap'
```

## Common Tasks

### Add a New Course

```typescript
// In Supabase
INSERT INTO courses (title, progress, icon_name) VALUES
('React Hooks Deep Dive', 25, 'Brain');
```

### Customize Colors

Edit `src/constants/colors.ts`:
```typescript
export const COLORS = {
  accent: {
    purple: '#8B5CF6',  // Change purple
    cyan: '#06B6D4',    // Change cyan
    // ...
  }
}
```

### Modify Animations

Edit `src/utils/animations.ts`:
```typescript
export const heroVariants = {
  // Adjust animation config here
}
```

### Update Hero Section

Edit `src/components/dashboard/HeroTile.tsx`:
```typescript
// Modify welcome message, stats, or emojis
```

## Deployment

For production deployment to Vercel:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit vercel.com
   - Import your GitHub repository
   - Add environment variables
   - Deploy

See `DEPLOYMENT.md` for detailed instructions.

## Troubleshooting

### Courses not loading?
1. Check `.env.local` has correct Supabase URL and key
2. Verify `courses` table exists in Supabase
3. Check browser console for errors
4. Verify CORS settings in Supabase

### Build fails?
```bash
npm run type-check    # Check TypeScript errors
npm run lint         # Check ESLint errors
rm -rf .next node_modules
npm install
npm run build        # Rebuild
```

### Animations laggy?
1. Clear browser cache
2. Check browser DevTools Performance tab
3. Reduce number of simultaneous animations
4. Verify GPU acceleration is enabled

### Mobile layout broken?
1. Test on actual device, not just browser devtools
2. Check `useMediaQuery` hook is working
3. Verify Tailwind breakpoints
4. Clear cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

## Next Steps

1. **Customize** - Update colors, add your name, change emojis
2. **Test** - Run `npm run build` to verify everything works
3. **Deploy** - Follow DEPLOYMENT.md for Vercel setup
4. **Share** - Show recruiters your live dashboard!

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org)

## Support

For questions or issues:
1. Check `README.md` for detailed documentation
2. Review code comments in components
3. Check Next.js/React/Supabase official documentation
4. Review browser console for error messages

---

Happy coding! 🚀

Built with Next.js 15, React 19, Framer Motion, Tailwind CSS, and Supabase.
