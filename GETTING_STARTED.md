# NovaLearn - Getting Started (Step-by-Step)

Welcome! This guide will walk you through setting up NovaLearn from scratch, step by step.

## Prerequisites Check

Before you start, make sure you have:

1. **Node.js** (version 18.17+)
   - Download: https://nodejs.org
   - Check: Open terminal and run `node --version`
   - Should show: v18.17.0 or higher

2. **npm** (comes with Node.js)
   - Check: Run `npm --version`
   - Should show: 9.0.0 or higher

3. **Git** (optional but recommended)
   - Download: https://git-scm.com
   - Check: Run `git --version`

4. **Code Editor** (VS Code recommended)
   - Download: https://code.visualstudio.com

5. **Supabase Account** (free)
   - Sign up: https://app.supabase.com
   - Free tier is perfect for this project

## Step 1: Clone or Download the Project

### Option A: Clone from GitHub

```bash
git clone https://github.com/yourusername/nova-learn.git
cd nova-learn
```

### Option B: Download the Folder

The project is in: `c:\Users\Admin\Downloads\project1\`

## Step 2: Install Dependencies (2-3 minutes)

Open terminal in the project folder and run:

```bash
npm install
```

**What's happening**: This downloads all required packages (React, Next.js, Tailwind, etc.)

You should see lots of text and a progress bar. When it's done, you'll see:
```
added XXX packages
```

## Step 3: Set Up Environment Variables

### What are environment variables?
They are secret values your app needs (like API keys) that you don't want to share publicly.

### Create .env.local file:

1. In the project root, copy `.env.example`
2. Rename the copy to `.env.local`
3. Open `.env.local` in your editor

You should see:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Note**: `.env.local` is already in `.gitignore` so your keys won't be shared.

## Step 4: Create a Supabase Account

### Sign Up

1. Go to https://app.supabase.com
2. Click "Sign Up"
3. Create account with email and password
4. Verify your email

### Create a New Project

1. Click "New Project"
2. Fill in:
   - **Project Name**: `nova-learn`
   - **Database Password**: Create a secure password (write it down!)
   - **Region**: Select closest to you
3. Click "Create new project"
4. Wait 2-3 minutes for setup

### Get Your Credentials

1. Project is created → Click into it
2. Click "Settings" (gear icon, bottom left)
3. Click "API" in the left sidebar
4. Copy these values:
   - **Project URL**: `https://your-project.supabase.co` (replace xxx)
   - **Anon Key**: Your public API key

## Step 5: Add Credentials to .env.local

Update your `.env.local` file with values from Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

**Replace**:
- `your-project` with your actual project name
- `your-actual-anon-key` with the key from Supabase

## Step 6: Create the Database Table

Now we need to create the `courses` table in Supabase.

### In Supabase Dashboard:

1. Click "SQL Editor" (left sidebar)
2. Click "New Query"
3. Copy and paste this SQL:

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

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON courses
  FOR SELECT
  USING (true);
```

4. Click "Run" button
5. You should see "Executed successfully"

✅ Your database is ready!

## Step 7: Start Development Server

Back in your terminal, run:

```bash
npm run dev
```

You should see:
```
- Local:        http://localhost:3000
- Environments: .env.local
```

## Step 8: View Your Dashboard

1. Open browser to: http://localhost:3000
2. You should see the NovaLearn dashboard!

If it doesn't load:
- Check terminal for error messages
- Make sure port 3000 is not in use
- Check that `.env.local` has correct credentials

## Step 9: Explore the Dashboard

You should see:

1. **Sidebar** (left on desktop) with navigation
2. **Hero Section** with welcome message
3. **Course Cards** showing your 4 courses
4. **Activity Graph** with learning activity
5. **Statistics** showing metrics
6. **Goal Tracker** for weekly/monthly targets

Try these interactions:

- ✅ Click navigation items in sidebar
- ✅ Hover over course cards (they lift up)
- ✅ Change activity view (7 days, 30 days)
- ✅ Resize browser to test mobile (press F12)

## Troubleshooting This Step

### "Can't connect to Supabase"

1. Check `.env.local` credentials are correct
2. Verify Supabase project is active
3. Check internet connection
4. Try refreshing the page

### "Blank white page"

1. Open DevTools (F12)
2. Click "Console" tab
3. Look for red errors
4. Note the error and check troubleshooting

### "Port 3000 in use"

Kill the process or run:
```bash
npm run dev -- -p 3001
```

## Step 10: Customize (Optional)

Want to personalize it?

### Change user name:

1. Open `src/constants/mockData.ts`
2. Find `MOCK_USER_NAME = 'Anjyot'`
3. Change to your name

### Change colors:

1. Open `src/constants/colors.ts`
2. Modify hex values
3. Changes appear instantly

### Change welcome message:

1. Open `src/components/dashboard/HeroTile.tsx`
2. Find "Welcome back, Anjyot 👋"
3. Edit the text

## Step 11: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production version.

You should see:
```
✓ Compiled successfully
Generated static pages
```

## Step 12: Deploy to Vercel (Optional)

### Free Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Create account (connect GitHub for easy deployment)

### Deploy Your Project

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial NovaLearn deployment"
   git push origin main
   ```

2. In Vercel:
   - Click "Add New"
   - Select "Project"
   - Import your GitHub repository
   - Click "Import"

3. Add Environment Variables:
   - Click "Environment Variables"
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL=...`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`

4. Click "Deploy"

In a few minutes, your app is live!

## Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Check code quality
npm run type-check    # Check for TypeScript errors
```

## File Structure Quick Reference

```
project1/
├── src/
│   ├── app/          → Pages
│   ├── components/   → React components
│   ├── lib/          → Database code
│   ├── hooks/        → Custom hooks
│   └── utils/        → Helper functions
├── .env.local        → Your secrets (create this)
├── package.json      → Dependencies
└── README.md         → Full documentation
```

## Key Concepts Explained

### Server Components
Your main page fetches data from Supabase on the server (faster, more secure).

### React Components
The UI is built from reusable React components.

### Tailwind CSS
Styling is done with utility classes (no separate CSS files).

### Framer Motion
Animations make the UI smooth and professional.

### Supabase
Database stores your courses and data.

## Common Questions

**Q: What if I need to restart the server?**
A: Press `Ctrl+C` in terminal to stop, then `npm run dev` to start again.

**Q: Can I see database in Supabase?**
A: Yes! In Supabase dashboard → "Table Editor" → Select "courses" table.

**Q: How do I update course progress?**
A: In Supabase table editor, click the progress number and edit it. Changes appear instantly.

**Q: Can I add more courses?**
A: Yes! In Supabase table editor, click "+" to add new rows.

**Q: How do I hide the console errors?**
A: Some errors are okay and expected. If the app works, you're good!

## Next Steps

1. ✅ Get the app running locally
2. ✅ Explore the code and understand how it works
3. ✅ Customize it (change name, colors, courses)
4. ✅ Deploy to Vercel
5. ✅ Share with friends and recruiters
6. ✅ Keep building and improving

## Learning Resources

- [Next.js Tutorial](https://nextjs.org/learn)
- [React Documentation](https://react.dev/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Guide](https://supabase.com/docs)

## Support

If something breaks:

1. **Check the error message** - it usually tells you what's wrong
2. **Read README.md** - has more detailed help
3. **Check Google** - search your error message
4. **Check Discord communities** - Next.js, React, Supabase all have active communities

## Checklist

- [ ] Node.js installed (check with `node --version`)
- [ ] npm working (check with `npm --version`)
- [ ] Project downloaded/cloned
- [ ] `npm install` completed
- [ ] `.env.local` created with Supabase credentials
- [ ] Supabase database created
- [ ] `npm run dev` started
- [ ] Dashboard loads at localhost:3000
- [ ] All 4 courses visible
- [ ] Animations working

**✅ If all checked, you're ready to go!**

---

## You're All Set! 🎉

Your NovaLearn dashboard is now running locally. 

Next step: Share it with the world by deploying to Vercel!

Need help? See README.md for detailed documentation.

Happy coding! 🚀
