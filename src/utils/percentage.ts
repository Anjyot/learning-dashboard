export function calculatePercentage(current: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function clampPercentage(value: number): number {
  return Math.max(0, Math.min(100, value));
}
