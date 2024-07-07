import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        seaweed: ['var(--font-seaweed-script)'],
      },
      screens: {
        '3xl': '1792px',
      },
      keyframes: {
        'fade-out': {
          from: { backgroundColor: 'white', color: 'var(--foreground-dark)' },
          to: {
            backgroundColor: 'transparent',
            color: 'var(--foreground-light)',
          },
        },
        'fade-in': {
          from: {
            backgroundColor: 'transparent',
            color: 'var(--foreground-light)',
          },
          to: { backgroundColor: 'white', color: 'var(--foreground-dark)' },
        },
      },
      animation: {
        'fade-out': 'fade-out .25s ease-in',
        'fade-in': 'fade-in .25s ease-in',
      },
      aspectRatio: {
        '35mm-film': '3 / 2',
        sdtv: '4 / 3',
      },
      colors: {
        'foreground-dark': 'var(--foreground-dark)',
        'foreground-light': 'var(--foreground-light)',
      },
    },
  },
  plugins: [],
};
export default config;
