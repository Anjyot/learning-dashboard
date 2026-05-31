'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Counter } from '@/components/ui/Counter';
import { useMounted } from '@/hooks/useMounted';

const CircularProgress = ({ percentage, size = 80, strokeWidth = 6 }: { percentage: number; size?: number; strokeWidth?: number }) => {
  const mounted = useMounted();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#progressGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={mounted ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const LearningGoalTile = (): JSX.Element => {
  const mounted = useMounted();

  const weeklyGoal = { current: 20, total: 25 };
  const monthlyGoal = { current: 72, total: 100 };
  const weeklyPercentage = (weeklyGoal.current / weeklyGoal.total) * 100;
  const monthlyPercentage = (monthlyGoal.current / monthlyGoal.total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card>
        <h2 className="text-lg font-semibold text-text-primary mb-6">
          Learning Goals
        </h2>

        <div className="flex items-center gap-6 mb-6">
          <div className="relative flex-shrink-0">
            <CircularProgress percentage={monthlyPercentage} size={90} strokeWidth={7} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-lg font-bold text-text-primary">
                  <Counter to={Math.round(monthlyPercentage)} duration={1.5} />
                </span>
                <span className="text-xs text-text-muted block">%</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-text-secondary mb-1">Monthly Progress</p>
            <p className="text-2xl font-bold text-text-primary">
              <Counter to={monthlyGoal.current} duration={1.2} />
              <span className="text-sm text-text-secondary font-normal"> / {monthlyGoal.total} hours</span>
            </p>
            <p className="text-xs text-text-muted mt-1">Stay consistent to reach your goal</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm text-text-secondary">Weekly Goal</span>
              <div className="text-sm font-bold text-text-primary">
                <Counter to={weeklyGoal.current} duration={1.2} />
                <span className="text-xs text-text-secondary font-normal"> / {weeklyGoal.total} hours</span>
              </div>
            </div>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
                initial={{ width: 0 }}
                animate={mounted ? { width: `${weeklyPercentage}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm text-text-secondary">Monthly Goal</span>
              <div className="text-sm font-bold text-text-primary">
                <Counter to={monthlyGoal.current} duration={1.2} />
                <span className="text-xs text-text-secondary font-normal"> / {monthlyGoal.total} hours</span>
              </div>
            </div>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                initial={{ width: 0 }}
                animate={mounted ? { width: `${monthlyPercentage}%` } : { width: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-6 p-3 bg-accent-green/10 border border-accent-green/30 rounded-lg"
        >
          <p className="text-xs text-accent-green font-medium">
            ✓ You&apos;re on track! Keep up the consistency.
          </p>
        </motion.div>
      </Card>
    </motion.div>
  );
};
