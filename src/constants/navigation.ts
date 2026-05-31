import {
  LayoutGrid,
  BookOpen,
  TrendingUp,
  Trophy,
  Settings,
  type LucideIcon,
} from 'lucide-react';

export interface NavItemConfig {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavItemConfig[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutGrid,
  },
  {
    label: 'Courses',
    href: '/courses',
    icon: BookOpen,
  },
  {
    label: 'Progress',
    href: '/progress',
    icon: TrendingUp,
  },
  {
    label: 'Achievements',
    href: '/achievements',
    icon: Trophy,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];
