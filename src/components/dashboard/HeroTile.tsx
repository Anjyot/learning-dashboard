'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Glow } from '@/components/ui/Glow';
import { Counter } from '@/components/ui/Counter';
import { heroVariants } from '@/utils/animations';
import {
  MOCK_USER_NAME,
  MOCK_STATISTICS,
} from '@/constants/mockData';

export const HeroTile = (): JSX.Element => {
  const stats = [
    { emoji: '🔥', label: 'Day Streak', value: MOCK_STATISTICS.streak },
    { emoji: '📚', label: 'Active Courses', value: 4 },
    {
      emoji: '🏆',
      label: 'Certificates',
      value: MOCK_STATISTICS.certificates,
    },
    { emoji: '⏳', label: 'Learning Hours', value: MOCK_STATISTICS.learningHours },
  ];

  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden"
    >
      <Card className="relative col-span-1 md:col-span-2 row-span-1 min-h-[280px] flex flex-col justify-between p-8">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none rounded-2xl" />

        {/* Animated gradient shift overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.08) 50%, rgba(6,182,212,0.15) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        <Glow color="purple" size={300} delay={0.1} />
        <Glow color="cyan" size={250} delay={0.2} />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 flex items-center justify-center text-3xl border border-accent-purple/40">
              🧑‍💻
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
                Welcome back, {MOCK_USER_NAME} 👋
              </h1>
              <p className="text-sm text-text-secondary mt-1">
                Keep pushing forward. You&apos;re 75% closer to your learning goal.
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-xs text-text-muted mb-4"
          >
            Stay consistent. Small progress compounds into big success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(139,92,246,0.4)' }}
                className="bg-white/5 border border-white/10 rounded-lg p-3 transition-all duration-300 cursor-default"
              >
                <div className="text-xl mb-1" aria-hidden="true">{stat.emoji}</div>
                <div className="text-xs text-text-secondary mb-1">
                  {stat.label}
                </div>
                <div className="text-lg font-bold text-text-primary">
                  <Counter to={stat.value} duration={1.5} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
