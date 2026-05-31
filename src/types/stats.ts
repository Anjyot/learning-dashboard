export interface Statistics {
  coursesCompleted: number;
  learningHours: number;
  streak: number;
  certificates: number;
}

export interface ActivityDataPoint {
  date: string;
  value: number;
}

export interface ActivityHistory {
  last7Days: ActivityDataPoint[];
  last30Days: ActivityDataPoint[];
  currentMonth: ActivityDataPoint[];
}

export type { Statistics as StatsData };
