/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#121212',         // Deep Black/Charcoal background
        'bg-soft': '#161616',   // Soft charcoal surface
        surface: '#181818',    // Dark card surface
        'surface-hover': '#222222',
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          strong: 'rgba(255, 255, 255, 0.18)',
          accent: 'rgba(161, 29, 51, 0.40)',
        },
        ink: '#FFFFFF',
        'ink-muted': '#E0E0E0',
        slate: {
          DEFAULT: '#A0A0A0',
          light: '#707070',
          dark: '#404040',
        },
        accent: {
          DEFAULT: '#A11D33', // Bold Crimson Red Primary (#A11D33)
          dark: '#7A1224',    // Deep Crimson Shadow
          bright: '#C51D38',  // Vibrant Crimson Glow
          soft: 'rgba(161, 29, 51, 0.15)',
          glow: 'rgba(161, 29, 51, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1160px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 20px 40px -15px rgba(161, 29, 51, 0.30)',
        glow: '0 0 25px -5px rgba(161, 29, 51, 0.45)',
        'glow-lg': '0 0 50px -10px rgba(161, 29, 51, 0.40)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(75% 65% at 50% 0%, rgba(161, 29, 51, 0.35) 0%, rgba(18, 18, 18, 0) 70%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
