/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      outFit: ["Outfit", "sans-serif"],
      sans: ["Poppins", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui:{
    theme:["cupcake"],
    
  }
};
