/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '970px',
      'lg': '1024px',
      'xl': '1286px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}