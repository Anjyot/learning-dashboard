import type { Course } from '@/types/course';
import type { Statistics, ActivityDataPoint } from '@/types/stats';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'Code',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'System Design Fundamentals',
    progress: 60,
    icon_name: 'Network',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'DSA in C++',
    progress: 90,
    icon_name: 'Brain',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Next.js Mastery',
    progress: 45,
    icon_name: 'Rocket',
    created_at: new Date().toISOString(),
  },
];

export const MOCK_STATISTICS: Statistics = {
  coursesCompleted: 8,
  learningHours: 120,
  streak: 12,
  certificates: 8,
};

export const MOCK_ACTIVITY_7DAYS: ActivityDataPoint[] = [
  { date: '6 days ago', value: 2 },
  { date: '5 days ago', value: 3 },
  { date: '4 days ago', value: 4 },
  { date: '3 days ago', value: 2 },
  { date: '2 days ago', value: 3 },
  { date: 'Yesterday', value: 4 },
  { date: 'Today', value: 3 },
];

export const MOCK_ACTIVITY_30DAYS: ActivityDataPoint[] = Array.from(
  { length: 30 },
  (_, i) => ({
    date: `${30 - i} days ago`,
    value: Math.floor(Math.random() * 5),
  })
);

export const MOCK_USER_NAME = 'Anjyot';
export const MOCK_USER_AVATAR_EMOJI = '👋';
