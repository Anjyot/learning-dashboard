export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export type CourseStatus = 'Beginner' | 'In Progress' | 'Almost Done' | 'Completed';

export function getCourseStatus(progress: number): CourseStatus {
  if (progress === 100) return 'Completed';
  if (progress >= 71) return 'Almost Done';
  if (progress >= 31) return 'In Progress';
  return 'Beginner';
}
