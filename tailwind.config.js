/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: "#4CAF50", // Set this to your desired primary color
    },
    spacing: {
      'banner-height': '600px', // Define custom height for the banner
    },
  },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // Enable Light and Dark themes
  },
}

