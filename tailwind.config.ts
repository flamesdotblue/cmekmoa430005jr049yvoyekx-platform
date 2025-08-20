import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0B0F14',
          800: '#0F141B',
          700: '#131A23',
          600: '#17202B',
          500: '#1C2733'
        },
        primary: {
          400: '#6EE7F5',
          500: '#22D3EE',
          600: '#06B6D4'
        },
        accent: {
          500: '#A78BFA'
        }
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(34, 211, 238, 0.15), 0 10px 30px rgba(0,0,0,0.4)'
      }
    },
  },
  plugins: [],
} satisfies Config
