/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    'mobile-bg': "url('./images/mobile.webp')",
        'md-bg':"url('./images/md-bg.jpg')",
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('./images/mobile.webp')",
        'md-bg':"url('./images/md-bg.jpg')"
      },
      colors:{
        'primary':'#242e30',
      },
      height:{
        'half':'35vh',
        'lg':'60vh',
      }
    },
  },
  variants: {
    extend: {
      height: ['responsive'],
    },
  },
  plugins: [],
}

