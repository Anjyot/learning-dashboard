import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export const sidebarVariants: Variants = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const courseCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 8,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const springConfig = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
};

export const springConfigHover = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 25,
};

export const springConfigPage = {
  type: 'spring' as const,
  stiffness: 250,
  damping: 20,
};
