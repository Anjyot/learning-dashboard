import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NovaLearn - Premium Learning Dashboard',
  description:
    'Track your learning progress, courses, achievements, and maintain your learning streak with NovaLearn.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'NovaLearn - Premium Learning Dashboard',
    description:
      'Track your learning progress, courses, achievements, and maintain your learning streak.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaLearn - Premium Learning Dashboard',
    description:
      'Track your learning progress, courses, achievements, and maintain your learning streak.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#09090B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
