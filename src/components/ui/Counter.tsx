'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
}

export const Counter = ({
  from = 0,
  to,
  duration = 1.2,
  decimals = 0,
}: CounterProps): JSX.Element => {
  const [count, setCount] = useState<number>(from);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const currentCount = from + (to - from) * progress;
      setCount(
        decimals > 0
          ? parseFloat(currentCount.toFixed(decimals))
          : Math.floor(currentCount)
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [to, from, duration, decimals]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};
