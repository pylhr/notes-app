/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'academia-dark': '#2c3e50',
        'academia-medium': '#34495e',
        'academia-light': '#ecf0f1',
        'academia-brown': '#8e6e53',
        'academia-blue': '#5c7d9a',
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
