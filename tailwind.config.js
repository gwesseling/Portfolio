module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        color: {
            off: {
               white: '#efefef',
            },
        },
        backgroundImage: theme => ({
            'banner': "url('https://gwesseling.nl/static/media/bg.8d64d67d.png')",
            'divider': "url('https://gwesseling.nl/static/media/divider.ffa917d1.jpg')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
