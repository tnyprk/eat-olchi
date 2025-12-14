/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        minimal: ['Outfit', 'sans-serif'],
      },
      colors: {
        olchi: {
          bg: '#F8EEDA',
          red: '#B13613',
          text: '#2E2B28',
          muted: '#7D7368',
          rule: '#D3C7B5',
        },
      },
    },
  },
  plugins: [],
}
