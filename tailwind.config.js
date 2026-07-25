/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, near-black premium base
        ink: {
          950: '#08080b',
          900: '#0a0a0f',
          800: '#101018',
          700: '#16161f',
          600: '#1d1d29',
        },
        // Single restrained accent — electric indigo
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 32s linear infinite',
        'pulse-slow': 'pulse-slow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
