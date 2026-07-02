/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0b',
        bone: '#f4efe6',
        chicha: '#e91e63',
        sun: '#ffd426',
        lima: '#27c46b',
        clay: '#f05a14',
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
