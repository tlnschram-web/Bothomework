/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0b',
        bone: '#f4efe6',
        chicha: { DEFAULT: '#e91e63', deep: '#c2185b' },
        sun: '#ffd426',
        lima: { DEFAULT: '#27c46b', deep: '#187a44' },
        clay: { DEFAULT: '#f05a14', deep: '#c2410c' },
      },
      fontFamily: {
        display: ['Fraunces Variable', 'Fraunces', 'Georgia', 'serif'],
        script: ['Pacifico', 'cursive'],
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
