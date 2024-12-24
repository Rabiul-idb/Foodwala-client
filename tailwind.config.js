/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('./src/assets/images/banner-bg.jpg')",
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

