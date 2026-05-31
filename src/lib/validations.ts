import type { Course } from '@/types/course';
import type { Statistics } from '@/types/stats';

export function validateCourse(course: unknown): course is Course {
  if (!course || typeof course !== 'object') return false;

  const obj = course as Record<string, unknown>;

  return (
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.progress === 'number' &&
    obj.progress >= 0 &&
    obj.progress <= 100 &&
    typeof obj.icon_name === 'string' &&
    typeof obj.created_at === 'string'
  );
}

export function validateCourses(data: unknown): data is Course[] {
  if (!Array.isArray(data)) return false;
  return data.every(validateCourse);
}

export function validateStatistics(stats: unknown): stats is Statistics {
  if (!stats || typeof stats !== 'object') return false;

  const obj = stats as Record<string, unknown>;

  return (
    typeof obj.coursesCompleted === 'number' &&
    obj.coursesCompleted >= 0 &&
    typeof obj.learningHours === 'number' &&
    obj.learningHours >= 0 &&
    typeof obj.streak === 'number' &&
    obj.streak >= 0 &&
    typeof obj.certificates === 'number' &&
    obj.certificates >= 0
  );
}
