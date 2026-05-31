'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Counter } from '@/components/ui/Counter';
import { useMounted } from '@/hooks/useMounted';
import { MOCK_STATISTICS } from '@/constants/mockData';

export const StatisticsTile = (): JSX.Element => {
  const mounted = useMounted();

  const stats = [
    {
      label: 'Courses Completed',
      value: MOCK_STATISTICS.coursesCompleted,
      icon: '🎓',
    },
    {
      label: 'Hours Learned',
      value: MOCK_STATISTICS.learningHours,
      icon: '⏱️',
    },
    {
      label: 'Certificates',
      value: MOCK_STATISTICS.certificates,
      icon: '📜',
    },
    {
      label: 'Current Streak',
      value: MOCK_STATISTICS.streak,
      icon: '🔥',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Statistics
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.4,
              }}
              className="p-3 rounded-lg bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-xl mb-2">{stat.icon}</div>
              <div className="text-xs text-text-secondary mb-1">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-text-primary">
                <Counter to={stat.value} duration={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
