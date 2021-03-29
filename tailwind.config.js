module.exports = {
  mode: 'jit',
  purge: ['./index.html', './public/**/*.html', './src/**/*.{js,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
