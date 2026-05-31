'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { sidebarVariants } from '@/utils/animations';

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-background-primary border-r border-white/10 flex-col z-50"
    >
      <div className="p-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="gradient-text text-2xl font-bold"
        >
          NovaLearn
        </motion.div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {NAVIGATION_ITEMS.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-purple/30 to-accent-cyan/20 text-text-primary border border-accent-purple/40'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/10 rounded-xl border border-accent-purple/40"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="relative w-5 h-5 flex-shrink-0" />
                <span className="relative text-sm font-medium">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-sm font-bold">
            AJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">
              Anjyot
            </p>
            <p className="text-xs text-text-muted truncate">Premium</p>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};
