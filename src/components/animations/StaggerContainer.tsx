'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';
import React from 'react';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer = ({
  children,
  className,
  delay = 0,
}: StaggerContainerProps): JSX.Element => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
