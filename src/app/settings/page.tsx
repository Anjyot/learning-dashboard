'use client';

import { motion } from 'framer-motion';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card } from '@/components/ui/Card';
import { Settings as SettingsIcon, User, Bell, Palette, Shield, Monitor } from 'lucide-react';
import { useState } from 'react';

interface SettingToggle {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

export default function SettingsPage(): JSX.Element {
  const [notifications, setNotifications] = useState<SettingToggle[]>([
    { id: 'streak', label: 'Streak Reminders', description: 'Get reminded to maintain your streak', enabled: true },
    { id: 'goals', label: 'Goal Updates', description: 'Notifications when you reach milestones', enabled: true },
    { id: 'courses', label: 'Course Recommendations', description: 'Personalized course suggestions', enabled: false },
    { id: 'weekly', label: 'Weekly Summary', description: 'Weekly learning progress report', enabled: true },
  ]);

  const toggleNotification = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, enabled: !n.enabled } : n)
    );
  };

  const sections = [
    {
      icon: User,
      title: 'Profile',
      description: 'Manage your personal information',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Dark mode is enabled by default',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Control your data and visibility',
    },
    {
      icon: Monitor,
      title: 'Display',
      description: 'Customize your dashboard layout',
    },
  ];

  return (
    <DashboardShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-text-primary flex items-center gap-3"
          >
            <SettingsIcon className="w-8 h-8 text-text-secondary" aria-hidden="true" />
            Settings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-2"
          >
            Manage your account and preferences
          </motion.p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-2xl font-bold">
                AJ
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary">Anjyot</h3>
                <p className="text-sm text-text-secondary">Premium Member</p>
                <p className="text-xs text-text-muted mt-1">anjyot@novalearn.dev</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-text-primary hover:bg-white/10 hover:border-accent-purple/40 transition-all duration-200"
              >
                Edit Profile
              </motion.button>
            </div>
          </Card>
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-accent-purple" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-text-primary">Notifications</h2>
            </div>

            <div className="space-y-4">
              {notifications.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-muted">{item.description}</p>
                  </div>
                  <button
                    onClick={() => toggleNotification(item.id)}
                    className={`relative w-11 h-6 rounded-full transition-all duration-300 ${
                      item.enabled
                        ? 'bg-accent-purple'
                        : 'bg-white/10'
                    }`}
                    role="switch"
                    aria-checked={item.enabled}
                    aria-label={`Toggle ${item.label}`}
                  >
                    <motion.div
                      className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ left: item.enabled ? 22 : 2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Other Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <Card className="cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent-purple/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-purple transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">{section.title}</h3>
                      <p className="text-xs text-text-muted">{section.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="border-accent-red/20">
            <h2 className="text-lg font-semibold text-accent-red mb-2">Danger Zone</h2>
            <p className="text-sm text-text-muted mb-4">
              These actions are irreversible. Please proceed with caution.
            </p>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 bg-accent-red/10 border border-accent-red/30 text-accent-red text-sm font-medium rounded-xl hover:bg-accent-red/20 transition-all duration-200"
              >
                Reset Progress
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 bg-accent-red/10 border border-accent-red/30 text-accent-red text-sm font-medium rounded-xl hover:bg-accent-red/20 transition-all duration-200"
              >
                Delete Account
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardShell>
  );
}
