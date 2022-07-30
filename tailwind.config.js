/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'md': '768px',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        darkCyan: {
          300: 'hsl(185, 75%, 39%)',
        },
        desaturated: {
          300: 'hsl(229, 23%, 23%)',
        },
        grayBlue: {
          300: 'hsl(227, 10%, 46%)',
        },
        darkGray: {
          300: 'hsl(0, 0%, 59%)',
        }
      }
    },
  },
  plugins: [],
}
