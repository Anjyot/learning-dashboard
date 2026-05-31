'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { floatingVariants } from '@/utils/animations';

interface GlowProps {
  color: 'purple' | 'cyan';
  size: number;
  delay?: number;
}

export const Glow = ({
  color,
  size,
  delay = 0,
}: GlowProps): JSX.Element => {
  const colorClasses = {
    purple: 'bg-accent-purple shadow-glow-purple',
    cyan: 'bg-accent-cyan shadow-glow-cyan',
  };

  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-3xl opacity-20 pointer-events-none',
        colorClasses[color]
      )}
      style={{
        width: size,
        height: size,
      }}
      variants={floatingVariants}
      animate="animate"
      initial={{ opacity: 0 }}
      transition={{ delay, duration: 0.5 }}
    />
  );
};
