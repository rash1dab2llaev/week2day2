/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        xs: '340px',
        sm: '640px',
        md: '750px',
        lg: '1000px',
        xl: '1200px',
       
      }
    },
  },
  plugins: [],
}

