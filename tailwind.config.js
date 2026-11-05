/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#020617',
          900: '#0F172A', // Slate 900 - authoritative primary ink
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#0F172A',
          hover: '#020617',
          blue: '#2563EB',
          emerald: '#059669',
        },
      },
      fontFamily: {
        display: ['"Avenir Black"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Avenir Light"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 16px 32px -4px rgba(0, 0, 0, 0.08)',
        'pill': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      letterSpacing: {
        tightest: '-0.035em',
      }
    },
  },
  plugins: [],
};
