/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"], // Add Arvo to the font family list
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
