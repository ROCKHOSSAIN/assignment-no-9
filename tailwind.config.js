/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        Poppins: "'Poppins', sans-serif",
        Squada: "'Squada One', cursive"
      },
      
    },
  },
 
  plugins: [require("daisyui")],
}

