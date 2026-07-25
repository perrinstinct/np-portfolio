/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Atlassian-inspired blue
        brand: {
          50: '#F4F8FF',
          100: '#E9F2FF',
          200: '#CFE1FD',
          300: '#8FB8F6',
          400: '#4C9AFF',
          500: '#2684FF',
          600: '#0C66E4',
          700: '#0052CC',
          800: '#0747A6',
        },
        // Neutral ink (text) — cool navy scale
        ink: {
          900: '#091E42',
          700: '#172B4D',
          600: '#44546F',
          500: '#626F86',
          400: '#8993A4',
          300: '#B3BAC5',
        },
        canvas: '#F7F8FA',
        surface: '#FFFFFF',
        line: '#E6E8EC',
        'line-strong': '#DADCE1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
      boxShadow: {
        card: '0 1px 2px rgba(9,30,66,0.06), 0 0 0 1px rgba(9,30,66,0.06)',
        'card-hover': '0 12px 28px -10px rgba(9,30,66,0.18), 0 0 0 1px rgba(9,30,66,0.08)',
        btn: '0 1px 2px rgba(9,30,66,0.12)',
        'brand-glow': '0 10px 30px -8px rgba(12,102,228,0.45)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 36s linear infinite',
      },
    },
  },
  plugins: [],
}
