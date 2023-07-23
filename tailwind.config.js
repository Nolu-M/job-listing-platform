/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-section': "url('/src/assets/back.jpg')",
        'login-section': "url('/src/assets/building.jpg')",
      },
    },
  },
  plugins: [],
}

