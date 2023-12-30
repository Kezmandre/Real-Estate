/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "advert": "url('/src/assets/Images/nav_ant.png')",
      },

      colors:{
        advertBg:"#141414"
      },

      fontFamily:{
        Urbanist: 'Urbanist'
      }
    },
    plugins: [],
  },
};

