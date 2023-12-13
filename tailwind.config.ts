import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
      colors: {
        background: '#EBE4D4',
        blueBorder: '#82D6C7',
        orangeDark: '#FF4E26',
        backgroundYellow: '#f9b021',
      },
      animation: {
        'slide-top': 'slide-top 4.5s linear  infinite both',
        slide: 'slide .3s linear',
      },
      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-50px) translateX(-25px)',
          },
          '100%': {
            tranform: 'translateY(0) translateX(0)',
          },
        },
        slide: {
          '0%': {
            transform: 'translatex(200px)',
          },
          '100%': {
            tranform: 'translateX(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
