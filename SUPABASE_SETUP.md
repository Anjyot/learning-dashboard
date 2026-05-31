# Supabase Database Setup

This guide covers setting up the NovaLearn database in Supabase.

## Prerequisites

- Supabase account (free tier is sufficient)
- PostgreSQL knowledge (basic)

## Step 1: Create a Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com)
2. Click "New project"
3. Enter project name: `nova-learn`
4. Create a secure database password
5. Select region closest to you
6. Click "Create new project"

Wait for the project to be provisioned (2-3 minutes).

## Step 2: Get Your Credentials

1. Go to Project Settings (gear icon)
2. Click "API" in the left sidebar
3. Copy the following:
   - **Project URL**: `https://your-project.supabase.co`
   - **Anon Key**: Your public API key
   - **Service Role Key**: Keep this secret (server-side only)

4. Update your `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## Step 3: Create the Courses Table

### Option A: Using SQL Editor (Recommended)

1. In Supabase dashboard, click "SQL Editor"
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Add comments for clarity
COMMENT ON TABLE courses IS 'User learning courses';
COMMENT ON COLUMN courses.id IS 'Unique course identifier';
COMMENT ON COLUMN courses.title IS 'Course title';
COMMENT ON COLUMN courses.progress IS 'Course completion progress (0-100)';
COMMENT ON COLUMN courses.icon_name IS 'Lucide React icon name';

-- Create index for faster queries
CREATE INDEX idx_courses_created_at ON courses(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access" ON courses
  FOR SELECT
  USING (true);

-- Create policy for authenticated insert
CREATE POLICY "Authenticated insert" ON courses
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
```

4. Click "Run" to execute the query
5. You should see "Executed successfully"

### Option B: Using Table Editor

1. Click "Table Editor" in sidebar
2. Click "Create a new table"
3. Name: `courses`
4. Create columns:
   - `id` (UUID, Primary Key, Default: gen_random_uuid())
   - `title` (Text, Required)
   - `progress` (Int2 or Int4, Required, Check: >= 0 AND <= 100)
   - `icon_name` (Text, Required)
   - `created_at` (Timestamp, Default: now())
   - `updated_at` (Timestamp, Default: now())

## Step 4: Seed Initial Data

### Option A: SQL Insert

In SQL Editor, run:

```sql
INSERT INTO courses (title, progress, icon_name) VALUES
('Advanced React Patterns', 75, 'Code'),
('System Design Fundamentals', 60, 'Network'),
('DSA in C++', 90, 'Brain'),
('Next.js Mastery', 45, 'Rocket');
```

### Option B: Table Editor

1. Click "Courses" table in sidebar
2. Click "+" button to add new row
3. Fill in the data:
   - Title: Advanced React Patterns
   - Progress: 75
   - Icon Name: Code
4. Repeat for other courses

### Sample Data

| Title | Progress | Icon |
|-------|----------|------|
| Advanced React Patterns | 75 | Code |
| System Design Fundamentals | 60 | Network |
| DSA in C++ | 90 | Brain |
| Next.js Mastery | 45 | Rocket |

**Available Icons:**
- Code
- Brain
- Rocket
- Network
- BookOpen
- GraduationCap

## Step 5: Configure Row Level Security (RLS)

### Enable RLS

1. Go to "Authentication" → "Policies"
2. Select "Courses" table
3. Click "Enable RLS" if not already enabled

### Create Policies

#### Read Policy (Public)

```sql
CREATE POLICY "Public read access" ON courses
  FOR SELECT
  USING (true);
```

This allows anyone to read courses.

#### Write Policies (Authenticated Only)

```sql
-- Allow authenticated users to insert
CREATE POLICY "Authenticated insert" ON courses
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update
CREATE POLICY "Authenticated update" ON courses
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete
CREATE POLICY "Authenticated delete" ON courses
  FOR DELETE
  USING (auth.role() = 'authenticated');
```

These require authentication for write operations.

## Step 6: Set Up Backups

### Enable Automatic Backups

1. Go to "Backups" in project menu
2. Select backup schedule:
   - Daily (recommended for production)
   - Weekly (fine for development)
3. Set retention period (14+ days recommended)

### Manual Backup

To export data:

```bash
# Using pg_dump (requires PostgreSQL installed)
pg_dump --data-only \
  --host "your-project.supabase.co" \
  --user "postgres" \
  --database "postgres" \
  > courses_backup.sql
```

Or via Supabase dashboard:
1. Click "Backups"
2. Click "Download" on any backup

## Step 7: Monitor Database

### View Database Size

1. Go to "Database" → "Statistics"
2. Check table sizes and usage

### View Logs

1. Go to "Database" → "Logs"
2. Filter by queries, errors, or duration
3. Monitor performance

### Check API Usage

1. Go to "API" → "Usage"
2. Monitor requests and bandwidth
3. Set alerts if needed

## Verification

### Test Connection from Local

```bash
# Create a test script
cat > test-db.js << 'EOF'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const { data, error } = await supabase
  .from('courses')
  .select('*')

console.log('Data:', data)
console.log('Error:', error)
EOF

# Run test
node test-db.js
```

Or test via CLI:

```bash
# Query via curl
curl -H "apikey: YOUR_ANON_KEY" \
  https://YOUR_PROJECT.supabase.co/rest/v1/courses?select=*
```

## Common Issues

### Table Not Visible

- Make sure RLS is not blocking your account
- Check that public read policy is enabled
- Verify table name is exactly `courses`

### Can't Insert Data

- Check RLS policies allow insert
- Verify you're authenticated if RLS requires it
- Check data types match schema

### Slow Queries

- Add indexes on frequently queried columns
- Use EXPLAIN to analyze query plans
- Optimize RLS policies

### Data Not Updating

- Check that updated_at column trigger is set
- Verify RLS policies allow updates
- Check browser cache isn't stale

## Schema Diagram

```
courses
├── id (UUID, PK)
├── title (Text)
├── progress (Integer 0-100)
├── icon_name (Text)
├── created_at (Timestamp)
└── updated_at (Timestamp)
```

## SQL Cheat Sheet

```sql
-- View all courses
SELECT * FROM courses;

-- Add a new course
INSERT INTO courses (title, progress, icon_name) 
VALUES ('New Course', 0, 'BookOpen');

-- Update course progress
UPDATE courses SET progress = 50 WHERE id = 'xxx';

-- Delete a course
DELETE FROM courses WHERE id = 'xxx';

-- Count courses
SELECT COUNT(*) FROM courses;

-- Average progress
SELECT AVG(progress) FROM courses;

-- Get courses in progress
SELECT * FROM courses WHERE progress > 0 AND progress < 100;

-- Order by most recent
SELECT * FROM courses ORDER BY created_at DESC;
```

## Production Considerations

1. **Enable Backups**: Set daily backups with 30+ day retention
2. **Monitor Usage**: Set up alerts for API rate limits
3. **Security**: Keep Service Role Key secret
4. **Indexes**: Add indexes for frequently queried columns
5. **RLS Policies**: Carefully craft policies for your use case
6. **Connection Pooling**: Consider for high-traffic applications
7. **Encryption**: Enable encryption at rest if available

## Additional Features

### Full Text Search

```sql
-- Add search column
ALTER TABLE courses ADD COLUMN search_text TEXT;

-- Create search index
CREATE INDEX courses_search_idx ON courses USING GIN (to_tsvector('english', search_text));
```

### Audit Trail

```sql
-- Create audit table
CREATE TABLE courses_audit (
  id BIGSERIAL PRIMARY KEY,
  course_id UUID,
  action TEXT,
  changes JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Time Tracking

```sql
-- Add completion date
ALTER TABLE courses ADD COLUMN completed_at TIMESTAMP;

-- Add estimated duration
ALTER TABLE courses ADD COLUMN estimated_hours INTEGER;
```

## Migration Strategy

For production migrations:

1. Test schema changes locally
2. Create migration files
3. Run migrations in staging first
4. Backup production database
5. Run migrations on production
6. Verify data integrity
7. Monitor for errors

## Support

For Supabase help:
- [Supabase Docs](https://supabase.com/docs)
- [Discord Community](https://discord.supabase.io)
- [GitHub Issues](https://github.com/supabase/supabase)

---

Your NovaLearn database is now ready! 🚀
