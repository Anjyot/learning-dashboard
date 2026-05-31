'use client';

import { motion } from 'framer-motion';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card } from '@/components/ui/Card';
import { Counter } from '@/components/ui/Counter';
import { ProgressBar } from '@/components/dashboard/ProgressBar';
import { MOCK_COURSES, MOCK_STATISTICS } from '@/constants/mockData';
import { TrendingUp, Target, Clock, Zap, BarChart3 } from 'lucide-react';

export default function ProgressPage(): JSX.Element {
  const overallProgress = Math.round(
    MOCK_COURSES.reduce((sum, c) => sum + c.progress, 0) / MOCK_COURSES.length
  );

  const weeklyData = [
    { day: 'Mon', hours: 3 },
    { day: 'Tue', hours: 4 },
    { day: 'Wed', hours: 2 },
    { day: 'Thu', hours: 5 },
    { day: 'Fri', hours: 3 },
    { day: 'Sat', hours: 6 },
    { day: 'Sun', hours: 4 },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  const milestones = [
    { label: 'First Course Started', completed: true, date: 'Jan 15' },
    { label: '10 Hours Completed', completed: true, date: 'Feb 2' },
    { label: '5 Day Streak', completed: true, date: 'Feb 10' },
    { label: 'First Certificate', completed: true, date: 'Mar 1' },
    { label: '100 Hours Milestone', completed: true, date: 'Apr 15' },
    { label: '30 Day Streak', completed: false, date: 'In Progress' },
    { label: 'Complete 10 Courses', completed: false, date: 'Not Yet' },
  ];

  return (
    <DashboardShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-text-primary flex items-center gap-3"
          >
            <TrendingUp className="w-8 h-8 text-accent-cyan" aria-hidden="true" />
            Progress Analytics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-2"
          >
            Your learning journey at a glance
          </motion.p>
        </div>

        {/* Overview Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Target, label: 'Overall Progress', value: overallProgress, suffix: '%', color: 'from-accent-purple/20 to-accent-indigo/20' },
            { icon: Clock, label: 'Total Hours', value: MOCK_STATISTICS.learningHours, suffix: 'h', color: 'from-accent-cyan/20 to-accent-purple/20' },
            { icon: Zap, label: 'Current Streak', value: MOCK_STATISTICS.streak, suffix: ' days', color: 'from-accent-yellow/20 to-accent-red/20' },
            { icon: BarChart3, label: 'This Week', value: 27, suffix: 'h', color: 'from-accent-green/20 to-accent-cyan/20' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-5 h-5 text-text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                  <p className="text-2xl font-bold text-text-primary">
                    <Counter to={stat.value} duration={1.5} />
                    <span className="text-sm text-text-secondary font-normal">{stat.suffix}</span>
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <h2 className="text-lg font-semibold text-text-primary mb-6">Weekly Activity</h2>
              <div className="flex items-end gap-3 h-40">
                {weeklyData.map((day, index) => (
                  <motion.div
                    key={day.day}
                    className="flex-1 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    <span className="text-xs text-text-muted">{day.hours}h</span>
                    <motion.div
                      className="w-full rounded-lg bg-gradient-to-t from-accent-purple to-accent-cyan"
                      style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: 8 }}
                      whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-xs text-text-secondary">{day.day}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Course Progress Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <h2 className="text-lg font-semibold text-text-primary mb-6">Course Progress</h2>
              <div className="space-y-4">
                {MOCK_COURSES.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <ProgressBar value={course.progress} label={course.title} />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <h2 className="text-lg font-semibold text-text-primary mb-6">Learning Milestones</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent" />
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.08 }}
                    className="flex items-center gap-4 pl-1"
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border ${
                      milestone.completed
                        ? 'bg-accent-green/20 border-accent-green/50 text-accent-green'
                        : 'bg-white/5 border-white/20 text-text-muted'
                    }`}>
                      {milestone.completed ? '✓' : '○'}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${milestone.completed ? 'text-text-primary' : 'text-text-muted'}`}>
                        {milestone.label}
                      </p>
                    </div>
                    <span className={`text-xs ${milestone.completed ? 'text-text-secondary' : 'text-text-muted'}`}>
                      {milestone.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardShell>
  );
}
