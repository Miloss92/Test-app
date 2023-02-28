module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./views/**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FE5E41',
      white: '#fff',
      lightGray: '#F2F2F2',
      mediumGray: '#DEDEDE',
      darkestGray: '#6E6E6E',
      dark: '#1E1E1E',
      green: '#00A878',
      darkRgba: 'rgba(0, 0, 0, 0.7)'
    },
    screens: {
      ss: { max: '435' },
      sm: { max: '767px' },
      xmd: { max: '1239px' },
      lg: '1239px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
