import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0d0c0a',
        surface: '#141210',
        'surface-raised': '#1c1a16',
        'surface-overlay': '#242018',
        'surface-bright': '#2e2a22',
        accent: '#d4a843',
        'accent-dim': '#a87e28',
        'accent-glow': 'rgba(212, 168, 67, 0.15)',
        'accent-subtle': 'rgba(212, 168, 67, 0.08)',
        'on-dark': '#f5f0e8',
        'on-dark-muted': '#a09880',
        'on-dark-subtle': '#66604e',
        'glass-bg': 'rgba(255, 248, 235, 0.04)',
        'glass-border': 'rgba(255, 248, 235, 0.08)',
        'glass-border-hover': 'rgba(212, 168, 67, 0.2)',
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.2rem)', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.2rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
