import { BentoGrid } from '@/components/dashboard/BentoGrid';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { getCourses } from '@/lib/getCourses';
import { MOCK_COURSES } from '@/constants/mockData';
import type { Course } from '@/types/course';

async function getDashboardData(): Promise<{ courses: Course[] }> {
  try {
    const courses = await getCourses();
    return { courses: courses.length > 0 ? courses : MOCK_COURSES };
  } catch {
    return { courses: MOCK_COURSES };
  }
}

export const revalidate = 60;

export default async function DashboardPage(): Promise<JSX.Element> {
  const { courses } = await getDashboardData();

  return (
    <DashboardShell>
      <BentoGrid courses={courses} />
    </DashboardShell>
  );
}
