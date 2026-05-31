'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export const MotionWrapper = ({
  children,
  variants,
  className,
  delay = 0,
}: MotionWrapperProps): JSX.Element => {
  return (
    <motion.div
      variants={variants}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
