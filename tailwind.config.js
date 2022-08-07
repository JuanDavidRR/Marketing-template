/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-black": "var(--primary-black)",
        "primary-green": "var(--primary-green)"
      }
    },
  },
  plugins: [],
}
