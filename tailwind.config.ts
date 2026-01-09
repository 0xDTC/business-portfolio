import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1e3a8a', // Main primary (replaces indigo-600)
          700: '#1e40af', // Dark variant
          800: '#1e40af', // Darker (replaces indigo-500)
          900: '#1e3a8a', // Darkest
          950: '#172554',
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
