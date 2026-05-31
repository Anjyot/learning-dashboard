'use client';

import { motion } from 'framer-motion';
import { useMounted } from '@/hooks/useMounted';

interface ProgressBarProps {
  value: number;
  label?: string;
}

export const ProgressBar = ({
  value,
  label,
}: ProgressBarProps): JSX.Element => {
  const mounted = useMounted();

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-text-secondary font-medium">
            {label}
          </span>
          <motion.span
            className="text-xs font-semibold text-accent-purple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(value)}%
          </motion.span>
        </div>
      )}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
          initial={{ width: 0 }}
          animate={mounted ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
};
