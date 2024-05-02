/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-light": "#BCF4DE",
        "primary-dark": "#CDE5D7", 
        "secondary-light": "#FFB7C3",
        "secondary-dark": "#EEC6CA"
      }
    },
    container:{
      center: true,
      padding:{
        default: '20px',
        md: '40px'
      }
    }
  },
  plugins: [],
}

