import type { Statistics } from '@/types/stats';
import { MOCK_STATISTICS } from '@/constants/mockData';

export async function getStats(): Promise<Statistics> {
  // In a production app, this would fetch from Supabase
  // For now, returns mock data that matches the dashboard display
  return MOCK_STATISTICS;
}
