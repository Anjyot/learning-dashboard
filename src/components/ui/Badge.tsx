'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
}

const variantStyles = {
  default:
    'bg-purple-500/20 text-accent-purple border border-purple-500/30 hover:bg-purple-500/30',
  success:
    'bg-accent-green/20 text-accent-green border border-accent-green/30 hover:bg-accent-green/30',
  warning:
    'bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30 hover:bg-accent-yellow/30',
  danger:
    'bg-accent-red/20 text-accent-red border border-accent-red/30 hover:bg-accent-red/30',
  info: 'bg-indigo-500/20 text-accent-indigo border border-indigo-500/30 hover:bg-indigo-500/30',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs font-medium',
  md: 'px-3 py-1.5 text-sm font-medium',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { children, variant = 'default', size = 'md', className, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full',
          'transition-all duration-200',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
