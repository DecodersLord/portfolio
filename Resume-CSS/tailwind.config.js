/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      backgroundImage: {
        'profilepic': "url('../profile-pic.jpeg')",
      },
      height: {
        '100': '26rem',
        '110': '28rem',
      },
      width: {
        '100': '26rem',
        '110': '28rem',
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
  
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}

