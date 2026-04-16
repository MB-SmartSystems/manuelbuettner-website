import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0a0a0a',
        surface: '#111111',
        'surface-raised': '#1a1a1a',
        'surface-overlay': '#222222',
        'surface-bright': '#2a2a2a',
        accent: '#84A98C',
        'accent-dim': '#52796F',
        'accent-glow': 'rgba(132, 169, 140, 0.15)',
        'accent-subtle': 'rgba(132, 169, 140, 0.08)',
        'on-dark': '#ffffff',
        'on-dark-muted': '#a0a0a0',
        'on-dark-subtle': '#666666',
        'glass-bg': 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-border-hover': 'rgba(132, 169, 140, 0.2)',
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
