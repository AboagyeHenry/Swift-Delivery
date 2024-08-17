/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {      
    extend: {
      screens: {
        'xl-custom': '1440px', // Custom breakpoint if needed
      }
    },
  },
  plugins: [],
}

