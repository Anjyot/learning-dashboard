'use client';

import { motion } from 'framer-motion';
import { HeroTile } from './HeroTile';
import { ActivityTile } from './ActivityTile';
import { StatisticsTile } from './StatisticsTile';
import { LearningGoalTile } from './LearningGoalTile';
import { CourseCard } from './CourseCard';
import type { Course } from '@/types/course';

interface BentoGridProps {
  courses: Course[];
}

export const BentoGrid = ({ courses }: BentoGridProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div className="md:col-span-2 lg:col-span-2">
        <HeroTile />
      </div>

      <div className="md:col-span-1 lg:col-span-2">
        <ActivityTile />
      </div>

      {courses.slice(0, 2).map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6 + index * 0.1,
            duration: 0.4,
          }}
        >
          <CourseCard course={course} delay={0} />
        </motion.div>
      ))}

      <div className="md:col-span-1 lg:col-span-2">
        <StatisticsTile />
      </div>

      {courses.slice(2).map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + index * 0.1,
            duration: 0.4,
          }}
        >
          <CourseCard course={course} delay={0} />
        </motion.div>
      ))}

      <div className="lg:col-span-2">
        <LearningGoalTile />
      </div>
    </motion.div>
  );
};
