module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  mode: 'jit',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1400px'
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif'],
    },
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' )
  ]
}
