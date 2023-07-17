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
      colors: {
        'girlcode-pink': "#e94154"
      },
      backgroundImage: {
        'hero-section': "url('/src/assets/back.jpg')",
      },
    },
  },
  plugins: [],
}

