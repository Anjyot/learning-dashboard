import { Skeleton } from '@/components/ui/Skeleton';
import { DashboardShell } from '@/components/layout/DashboardShell';

export default function Loading(): JSX.Element {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-2">
          <Skeleton className="h-80 rounded-2xl" />
        </div>

        <div className="md:col-span-1 lg:col-span-2">
          <Skeleton className="h-80 rounded-2xl" />
        </div>

        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}

        <div className="md:col-span-1 lg:col-span-2">
          <Skeleton className="h-64 rounded-2xl" />
        </div>

        {[3, 4].map((i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}

        <div className="lg:col-span-2">
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    </DashboardShell>
  );
}
