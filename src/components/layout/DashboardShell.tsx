'use client';

import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

interface DashboardShellProps {
  children: React.ReactNode;
}

export const DashboardShell = ({ children }: DashboardShellProps): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background-primary">
      <Sidebar />

      <main className="flex-1 lg:ml-72">
        <div className="p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
          {children}
        </div>
      </main>

      <MobileNav />
    </div>
  );
};
