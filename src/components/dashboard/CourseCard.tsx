'use client';

import { motion } from 'framer-motion';
import { getIcon } from '@/utils/iconMapper';
import { ProgressBar } from './ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Course, CourseStatus } from '@/types/course';
import { getCourseStatus } from '@/types/course';

interface CourseCardProps {
  course: Course;
  delay?: number;
}

export const CourseCard = ({
  course,
  delay = 0,
}: CourseCardProps): JSX.Element => {
  const Icon = getIcon(course.icon_name);
  const status: CourseStatus = getCourseStatus(course.progress);

  const statusColors: Record<CourseStatus, 'default' | 'info' | 'warning' | 'success'> = {
    'Beginner': 'default',
    'In Progress': 'info',
    'Almost Done': 'warning',
    'Completed': 'success',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: 'easeOut',
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full flex flex-col justify-between cursor-pointer group">
        <div>
          <div className="flex items-start justify-between mb-4">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-lg group-hover:from-accent-purple/30 group-hover:to-accent-cyan/30 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-accent-purple" />
            </motion.div>
            <Badge variant={statusColors[status]} size="sm">
              {status}
            </Badge>
          </div>

          <h3 className="text-sm font-semibold text-text-primary mb-2 line-clamp-2">
            {course.title}
          </h3>
        </div>

        <div>
          <ProgressBar value={course.progress} />
        </div>
      </Card>
    </motion.div>
  );
};
