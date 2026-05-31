# Deployment Guide

This guide covers deploying NovaLearn to production on Vercel.

## Prerequisites

- GitHub repository with NovaLearn code
- Vercel account (free tier available)
- Supabase account with configured database
- Custom domain (optional)

## Step 1: Prepare Your Repository

1. **Ensure all code is committed**
   ```bash
   git status
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Verify environment variables are not committed**
   - `.env.local` should be in `.gitignore`
   - Only `.env.example` should be committed

3. **Run final checks**
   ```bash
   npm run type-check
   npm run lint
   npm run build
   ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Find and select your `nova-learn` repository
5. Click "Import"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 3: Configure Environment Variables

### In Vercel Dashboard:

1. Go to your project
2. Click "Settings"
3. Click "Environment Variables"
4. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key

### Important Notes:

- These are public keys (NEXT_PUBLIC_), so it's safe to expose them
- Get these values from Supabase → Project Settings → API
- They should match your `.env.example` file

## Step 4: Verify Deployment

1. Wait for build to complete (usually 2-3 minutes)
2. Click the deployment URL to visit your site
3. Test the following:
   - ✓ Dashboard loads without errors
   - ✓ Courses fetch from Supabase correctly
   - ✓ Animations work smoothly
   - ✓ Mobile navigation works
   - ✓ Desktop sidebar displays correctly
   - ✓ All links work correctly

### Check Deployment Status

```bash
vercel ls              # List all deployments
vercel inspect        # Inspect current deployment
```

## Step 5: Connect Custom Domain (Optional)

### In Vercel Dashboard:

1. Go to your project
2. Click "Settings" → "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

### DNS Configuration

Vercel will provide you with:
- **Option 1**: Change nameservers (recommended)
  - Update your domain registrar's nameservers to Vercel's
  
- **Option 2**: Add CNAME record
  - Add CNAME pointing to your Vercel domain
  - Add TXT record for verification

## Step 6: Configure Analytics (Optional)

### Enable Vercel Analytics:

1. Go to project Settings
2. Click "Analytics"
3. Enable "Web Analytics"
4. Add Web Vitals tracking

### View Analytics:

- Vercel Dashboard → Analytics
- Monitor Core Web Vitals
- Track page performance

## Step 7: Monitor and Maintain

### Set Up Alerts

1. Go to project Settings
2. Click "Notifications"
3. Configure email alerts for:
   - Build failures
   - Deployment errors
   - Performance regressions

### Regular Checks

- Review Lighthouse scores monthly
- Check error logs in Vercel dashboard
- Monitor Supabase usage
- Update dependencies regularly

```bash
# Check for outdated packages
npm outdated

# Update packages safely
npm update

# Update specific package
npm install package@latest
```

## Rollback Deployment

If something goes wrong:

1. Go to project → "Deployments"
2. Find the previous working deployment
3. Click "..." → "Promote to Production"
4. Verify the rollback worked

Or via CLI:

```bash
vercel ls                    # List deployments
vercel rollback             # Rollback to previous
```

## Performance Optimization

### Before Deploying:

1. **Run Lighthouse audit**
   ```bash
   npm run build
   npm run start
   # Open DevTools → Lighthouse
   ```

2. **Check bundle size**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   npm run build
   ```

3. **Optimize images**
   - Ensure all images are under 100KB
   - Use WebP format where possible

### After Deploying:

1. Check Vercel Analytics for Core Web Vitals
2. Run Lighthouse on production URL
3. Test on slow 3G network

## Environment-Specific Configuration

### Development

```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=local-key
```

### Production

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=production-key
```

### Preview

- Vercel automatically creates preview deployments for pull requests
- Each PR gets a unique URL
- Use for testing before merging

## Database Backups

### Enable Supabase Backups:

1. Go to Supabase Dashboard
2. Project → Backups
3. Enable daily backups
4. Configure retention period

### Manual Backup

```sql
-- Export courses table
SELECT * FROM courses;
```

## Monitoring

### Vercel Monitoring:

- **Real-time logs**: `vercel logs` (CLI)
- **Error tracking**: Project → Logs
- **Performance metrics**: Project → Analytics

### Supabase Monitoring:

- **Database logs**: Project → Logs
- **API usage**: Project → Usage

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
vercel build --cwd . --skip-download
```

**Common causes:**
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Page Shows Blank

**Check:**
1. Browser console for errors
2. Vercel logs for build errors
3. Supabase connection status
4. Environment variables are set

### Slow Performance

**Optimize:**
1. Enable compression in Vercel
2. Use Vercel Functions for API routes
3. Enable image optimization
4. Check Supabase query performance

### Database Connection Issues

```bash
# Verify Supabase connection
curl -H "apikey: YOUR_ANON_KEY" \
  https://YOUR_PROJECT.supabase.co/rest/v1/courses?select=*
```

## Security Checklist

- ✓ Environment variables are not in version control
- ✓ Supabase RLS policies are configured
- ✓ CORS headers are set correctly
- ✓ SSL/TLS is enabled
- ✓ API keys are rotated regularly
- ✓ Secrets are not logged
- ✓ Rate limiting is configured

## Version Control

### Keep Production Stable:

```bash
# Create release branch
git checkout -b release/v1.0.0

# Push to GitHub
git push origin release/v1.0.0

# Create tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Merge to main
git checkout main
git merge release/v1.0.0
```

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Animations are smooth
- [ ] Mobile navigation works
- [ ] Courses fetch from database
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals are green
- [ ] Custom domain works (if set up)
- [ ] Analytics are collecting data
- [ ] Backups are enabled

## Support

For deployment issues:

1. Check Vercel Documentation: https://vercel.com/docs
2. Check Supabase Documentation: https://supabase.com/docs
3. Review this guide's Troubleshooting section
4. Check error logs in Vercel/Supabase dashboards

## Next Steps

After deployment:

1. Share your live URL with recruiters
2. Monitor performance metrics
3. Gather user feedback
4. Plan future enhancements
5. Keep dependencies updated

---

Happy deploying! 🚀
