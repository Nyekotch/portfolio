export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a7480',
          DEFAULT: '#208c95',
          light: '#32b8c6',
          
        },
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}
