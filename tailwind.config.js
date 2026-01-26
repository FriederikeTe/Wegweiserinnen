/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'typewriter': ['p22-typewriter', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'lusitana': ['Lusitana', 'serif'],
        'caladea': ['Caladea', 'serif'],
        'andada': ['Andada Pro', 'serif']
      },
    },
  },
  plugins: [],
}