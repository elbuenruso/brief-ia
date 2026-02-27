/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a4da1',
        'brand-grey': '#f8f9fa',
        'brand-dark': '#1e293b',
      },
    },
  },
  plugins: [],
}