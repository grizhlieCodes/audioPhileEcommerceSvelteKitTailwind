const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.svelte'],
  theme: {
    screens: {
      mTab: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['manrope']
    },
    extend: {
      colors: {
        darkOrange: '#D87D4A',
        darkGray: '#101010',
        lightGray: '#F1F1F1',
        nearWhite: '#F1F1F1',
        lightOrange: '#fbaf85'
      },
      backgroundImage: theme => ({
        'home-zx9-mob': "url('./static/images/')"
      })
    }
  }
}