/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,css,html}',
  ],
  theme: {
    extend: {
      colors: {
        customGray1: 'rgb(23, 23, 23)',
        customGray2: 'rgb(28, 30, 29)',
        customGray3: 'rgb(28, 28, 28)',
        customGray4: 'rgb(60, 60, 60)',
        customWhite1: 'rgb(248, 250, 249)',
        customYellow1: 'rgb(227, 232, 165)',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        fade: 'fade 2s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
