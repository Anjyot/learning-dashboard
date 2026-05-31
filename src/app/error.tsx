'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { DashboardShell } from '@/components/layout/DashboardShell';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  return (
    <DashboardShell>
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="text-center py-12">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-4 flex justify-center"
            >
              <AlertCircle className="w-12 h-12 text-accent-red" />
            </motion.div>

            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Something went wrong
            </h1>

            <p className="text-sm text-text-secondary mb-6">
              We encountered an error while loading your dashboard. Please try
              again.
            </p>

            {error.message && (
              <div className="mb-6 p-3 bg-accent-red/10 border border-accent-red/30 rounded-lg text-xs text-accent-red text-left font-mono overflow-auto max-h-20">
                {error.message}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => reset()}
              className="w-full px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-sm font-semibold rounded-lg hover:shadow-glow-hover transition-all duration-300"
            >
              Try Again
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </DashboardShell>
  );
}
