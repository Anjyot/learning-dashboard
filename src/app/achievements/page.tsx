'use client';

import { motion } from 'framer-motion';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Trophy, Medal, Star, Award, Crown, Flame, BookCheck, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: typeof Trophy;
  earned: boolean;
  date: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: Star,
    earned: true,
    date: 'Jan 15, 2024',
    rarity: 'common',
  },
  {
    id: '2',
    title: 'Knowledge Seeker',
    description: 'Complete 5 courses',
    icon: BookCheck,
    earned: true,
    date: 'Feb 20, 2024',
    rarity: 'common',
  },
  {
    id: '3',
    title: 'Streak Master',
    description: 'Maintain a 7-day learning streak',
    icon: Flame,
    earned: true,
    date: 'Mar 1, 2024',
    rarity: 'rare',
  },
  {
    id: '4',
    title: 'Century Club',
    description: 'Accumulate 100 learning hours',
    icon: Medal,
    earned: true,
    date: 'Apr 10, 2024',
    rarity: 'rare',
  },
  {
    id: '5',
    title: 'Perfectionist',
    description: 'Score 100% on any course assessment',
    icon: Target,
    earned: true,
    date: 'Apr 22, 2024',
    rarity: 'epic',
  },
  {
    id: '6',
    title: 'Scholar',
    description: 'Earn 8 certificates',
    icon: Award,
    earned: true,
    date: 'May 5, 2024',
    rarity: 'epic',
  },
  {
    id: '7',
    title: 'Champion',
    description: 'Complete 10 courses with 90%+ score',
    icon: Trophy,
    earned: false,
    date: 'Locked',
    rarity: 'legendary',
  },
  {
    id: '8',
    title: 'Legend',
    description: 'Maintain a 30-day learning streak',
    icon: Crown,
    earned: false,
    date: 'Locked',
    rarity: 'legendary',
  },
];

const rarityColors: Record<Achievement['rarity'], string> = {
  common: 'from-zinc-400/20 to-zinc-500/20 border-zinc-500/30',
  rare: 'from-accent-cyan/20 to-accent-indigo/20 border-accent-cyan/30',
  epic: 'from-accent-purple/20 to-accent-indigo/20 border-accent-purple/30',
  legendary: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
};

const rarityBadge: Record<Achievement['rarity'], 'default' | 'info' | 'warning' | 'success'> = {
  common: 'default',
  rare: 'info',
  epic: 'success',
  legendary: 'warning',
};

export default function AchievementsPage(): JSX.Element {
  const earnedCount = ACHIEVEMENTS.filter(a => a.earned).length;

  return (
    <DashboardShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-text-primary flex items-center gap-3"
            >
              <Trophy className="w-8 h-8 text-accent-yellow" aria-hidden="true" />
              Achievements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary mt-2"
            >
              {earnedCount} of {ACHIEVEMENTS.length} achievements unlocked
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <div className="h-2 flex-1 min-w-[120px] bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(earnedCount / ACHIEVEMENTS.length) * 100}%` }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
              />
            </div>
            <span className="text-sm text-text-secondary font-medium">
              {Math.round((earnedCount / ACHIEVEMENTS.length) * 100)}%
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                whileHover={achievement.earned ? { y: -4, scale: 1.02 } : undefined}
              >
                <Card className={`relative overflow-hidden h-full ${!achievement.earned ? 'opacity-50' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[achievement.rarity]} pointer-events-none rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${rarityColors[achievement.rarity]}`}
                        whileHover={achievement.earned ? { rotate: 5 } : undefined}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-6 h-6 text-text-primary" aria-hidden="true" />
                      </motion.div>
                      <Badge variant={rarityBadge[achievement.rarity]} size="sm">
                        {achievement.rarity}
                      </Badge>
                    </div>

                    <h3 className="text-sm font-semibold text-text-primary mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-text-muted mb-3">
                      {achievement.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">
                        {achievement.earned ? '✓ Earned' : '🔒 Locked'}
                      </span>
                      <span className="text-xs text-text-muted">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </DashboardShell>
  );
}
