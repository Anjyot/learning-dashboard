import { supabase, isSupabaseConfigured } from './supabase';
import type { Course } from '@/types/course';

export async function getCourses(): Promise<Course[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('courses')
      .select('id, title, progress, icon_name, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch courses: ${error.message}`);
    }

    return data ?? [];
  } catch {
    return [];
  }
}
