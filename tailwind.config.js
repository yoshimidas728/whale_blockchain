/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(18,24,32)',
        customlightBlue:'rgb(22,30,41)',
        customBlackBlue:'rgb(11,14,19)',
        custommiddleBlue:'rgb(22,29,38)',
        customHeavyBlue:'rgb(18,24,31)',
        customgreen:'rgb(12,175,96)',
        'custom-text':'gray'
      }
    },
  },
  plugins: [],
};
