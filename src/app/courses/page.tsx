'use client';

import { motion } from 'framer-motion';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card } from '@/components/ui/Card';
import { CourseCard } from '@/components/dashboard/CourseCard';
import { MOCK_COURSES } from '@/constants/mockData';
import { BookOpen, Search, Filter, Plus } from 'lucide-react';
import { useState } from 'react';
import type { CourseStatus } from '@/types/course';
import { getCourseStatus } from '@/types/course';

type FilterOption = 'all' | 'beginner' | 'in-progress' | 'almost-done' | 'completed';

const filterLabels: Record<FilterOption, string> = {
  'all': 'All',
  'beginner': 'Beginner',
  'in-progress': 'In Progress',
  'almost-done': 'Almost Done',
  'completed': 'Completed',
};

export default function CoursesPage(): JSX.Element {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'all') return matchesSearch;

    const status: CourseStatus = getCourseStatus(course.progress);
    const filterMap: Record<FilterOption, CourseStatus | null> = {
      'all': null,
      'beginner': 'Beginner',
      'in-progress': 'In Progress',
      'almost-done': 'Almost Done',
      'completed': 'Completed',
    };

    return matchesSearch && status === filterMap[filter];
  });

  const totalProgress = Math.round(
    MOCK_COURSES.reduce((sum, c) => sum + c.progress, 0) / MOCK_COURSES.length
  );

  return (
    <DashboardShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-text-primary flex items-center gap-3"
            >
              <BookOpen className="w-8 h-8 text-accent-purple" aria-hidden="true" />
              My Courses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary mt-2"
            >
              {MOCK_COURSES.length} courses · {totalProgress}% average progress
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-purple to-accent-indigo text-white text-sm font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            Add Course
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple/40 focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all duration-200"
              aria-label="Search courses"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted flex-shrink-0" aria-hidden="true" />
            <div className="flex gap-1 flex-wrap">
              {(Object.entries(filterLabels) as [FilterOption, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    filter === key
                      ? 'bg-accent-purple text-white'
                      : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary'
                  }`}
                  aria-label={`Filter by ${label}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <CourseCard course={course} delay={0} />
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <BookOpen className="w-12 h-12 text-text-muted mx-auto mb-4" aria-hidden="true" />
              <p className="text-text-secondary text-lg font-medium">No courses found</p>
              <p className="text-text-muted text-sm mt-2">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          </Card>
        )}
      </motion.div>
    </DashboardShell>
  );
}
