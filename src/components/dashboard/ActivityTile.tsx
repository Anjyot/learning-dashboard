'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { useMounted } from '@/hooks/useMounted';
import { MOCK_ACTIVITY_7DAYS } from '@/constants/mockData';
import React, { useState } from 'react';

type ActivityView = '7days' | '30days' | 'month';

export const ActivityTile = (): JSX.Element => {
  const mounted = useMounted();
  const [view, setView] = useState<ActivityView>('7days');

  const getActivityData = () => {
    switch (view) {
      case '30days':
        return Array.from({ length: 30 }, () =>
          Math.floor(Math.random() * 5)
        );
      case 'month':
        return Array.from({ length: 30 }, () =>
          Math.floor(Math.random() * 5)
        );
      default:
        return MOCK_ACTIVITY_7DAYS.map((d) => d.value);
    }
  };

  const activityData = getActivityData();

  const getColorForValue = (value: number): string => {
    const colors = {
      0: 'bg-white/5 hover:bg-white/10',
      1: 'bg-accent-green/30 hover:bg-accent-green/40',
      2: 'bg-accent-green/50 hover:bg-accent-green/60',
      3: 'bg-accent-green/70 hover:bg-accent-green/80',
      4: 'bg-accent-green hover:bg-accent-green/90',
    };
    return colors[Math.min(value, 4) as keyof typeof colors];
  };

  const viewOptions: { label: string; value: ActivityView }[] = [
    { label: '7 Days', value: '7days' },
    { label: '30 Days', value: '30days' },
    { label: 'Month', value: 'month' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Learning Activity
          </h2>
          <div className="flex gap-2">
            {viewOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setView(option.value)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  view === option.value
                    ? 'bg-accent-purple text-white'
                    : 'bg-white/5 text-text-secondary hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {activityData.map((value, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, scale: 0.5 } : { opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.01,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.15 }}
              className={`aspect-square rounded border border-white/10 ${getColorForValue(
                value
              )} cursor-pointer transition-all duration-200 relative group`}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-text-muted text-text-primary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
                {value} hours
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
          <span>No data</span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-sm ${
                    i === 0
                      ? 'bg-white/10'
                      : i === 1
                        ? 'bg-accent-green/30'
                        : i === 2
                          ? 'bg-accent-green/50'
                          : i === 3
                            ? 'bg-accent-green/70'
                            : 'bg-accent-green'
                  }`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
