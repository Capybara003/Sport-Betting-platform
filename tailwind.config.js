/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#390B39',
        linear:"#CB25CF" , // Example primary color
        l:"#481F49" ,
        la:"#15011a" ,
      },
      fontFamily:{
        sans:['Roboto',' sans-serif']
      },
      gridTemplateColumns:{
    '70/30':'70% 28%'
      },
    },
  },
  plugins: [],
}

