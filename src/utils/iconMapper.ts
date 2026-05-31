import {
  Code,
  Brain,
  Rocket,
  Network,
  BookOpen,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Brain,
  Rocket,
  Network,
  BookOpen,
  GraduationCap,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || BookOpen;
}
