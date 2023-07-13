/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomat:'#FF6D59',
        ijo:'#41AB55',
        light:'#FFF0EE',
        abu:'#ECF7EE'
      }
    },
  },
  plugins: [],
}