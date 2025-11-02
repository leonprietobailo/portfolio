/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0b1020',
        ink: '#0f172a',
        neon: '#22d3ee',
        magenta: '#f472b6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.25)',
      },
    },
    container: { center: true, padding: '1rem' }
  },
  plugins: [],
}