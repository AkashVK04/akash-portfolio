/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0C14',
        'bg-soft': '#0D0F1A',
        surface: '#12141F',
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.14)',
        },
        ink: '#F1F2F7',
        slate: {
          DEFAULT: '#9AA1B5',
          light: '#5C6379',
        },
        accent: {
          DEFAULT: '#8C7CFF',
          dark: '#7062E8',
          bright: '#A99BFF',
          soft: 'rgba(140,124,255,0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 1px 1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 16px 40px -12px rgba(140, 124, 255, 0.25)',
        glow: '0 0 0 1px rgba(140,124,255,0.4), 0 0 24px rgba(140,124,255,0.18)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(140,124,255,0.14) 0%, rgba(140,124,255,0) 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
