module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    fontFamily: {
      'sans': ['manrope']
    },
    extend: {
      colors: {
        darkOrange: '#D87D4A',
        darkGray: '#101010',
        lightGray: '#F1F1F1',
        nearWhite: '#FAFAFA',
        lightOrange: '#fbaf85'
      },
      screens: {
        'mTab': '400px'
      }
    }
  }
}