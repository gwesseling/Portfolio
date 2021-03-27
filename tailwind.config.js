module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            off: {
               white: '#efefef',
            },
        },
        backgroundImage: theme => ({
            'banner': "url('../public/bg.png')",
            'divider': "url('../public/divider.jpg')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
