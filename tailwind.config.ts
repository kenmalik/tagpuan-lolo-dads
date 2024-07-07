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
          from: { backgroundColor: 'white' },
          to: { backgroundColor: 'transparent' },
        },
        'fade-in': {
          from: { backgroundColor: 'transparent' },
          to: { backgroundColor: 'white' },
        },
      },
      animation: {
        'fade-out': 'fade-out .2s ease-in',
        'fade-in': 'fade-in .2s ease-in',
      },
      aspectRatio: {
        '35mm-film': '3 / 2',
        sdtv: '4 / 3',
      },
    },
  },
  plugins: [],
};
export default config;
