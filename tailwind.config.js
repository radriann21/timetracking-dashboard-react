/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(246, 80%, 60%)',
        'work-light-red': 'hsl(15, 100%, 70%)',
        'play-soft-blue': 'hsl(195, 74%, 62%)',
        'study-light-red': 'hsl(348, 100%, 68%)',
        'exercise-lime-green': 'hsl(145, 58%, 55%)',
        'social-violet': 'hsl(264, 64%, 52%)',
        'self-care-soft-orange': 'hsl(43, 84%, 65%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)'
      },
      fontFamily: {
        'global': "'Rubik'"
      }
    },
  },
  plugins: [],
}

