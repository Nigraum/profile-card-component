/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'md': '768px',
    },
    extend: {
      backgroundImage: {
        top: 'url(/assets/images/bg-pattern-top.svg)',
        bottom: 'url(/assets/images/bg-pattern-bottom.svg)',
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
