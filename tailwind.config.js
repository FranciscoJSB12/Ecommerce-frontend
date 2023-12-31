/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min':'300px', 'max':'599px'},
      'sm': '600px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {},
  },
  plugins: [],
}

