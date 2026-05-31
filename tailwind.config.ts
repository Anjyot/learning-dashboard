import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: {
          primary: '#09090B',
          secondary: '#111113',
          card: '#18181B',
          elevated: '#202024',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          green: '#22C55E',
          yellow: '#F59E0B',
          red: '#EF4444',
        },
      },
      backgroundImage: {
        'gradient-mesh': 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.1) 50%, rgba(6,182,212,0.2) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.15)',
        'glow-hover': '0 0 50px rgba(6, 182, 212, 0.2)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.2)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.2)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 20s ease infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring-smooth': 'cubic-bezier(0.23, 1, 0.320, 1)',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.glass': {
          backdropFilter: 'blur(24px)',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.glass-hover': {
          transitionProperty: 'all',
          transitionDuration: '300ms',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderColor: 'rgba(139, 92, 246, 0.4)',
          },
        },
        '.gradient-text': {
          backgroundImage: 'linear-gradient(to right, #8B5CF6, #6366F1, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.card-glow': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            borderRadius: '1rem',
            backgroundImage: 'linear-gradient(to right, rgba(139,92,246,0), rgba(139,92,246,0.05), rgba(6,182,212,0))',
            pointerEvents: 'none',
          },
        },
        '.noise': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
            opacity: '0.03',
            pointerEvents: 'none',
            borderRadius: '1rem',
          },
        },
        '.glow': {
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.15)',
        },
      });

      addUtilities({
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        '.gpu-accelerate': {
          transform: 'translateZ(0)',
          willChange: 'transform',
        },
        '.text-balance': {
          textWrap: 'balance',
        },
      });
    }),
  ],
};

export default config;
