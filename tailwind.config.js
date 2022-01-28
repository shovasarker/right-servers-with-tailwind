module.exports = {
  content: ['./*.html', './dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        paste: '#44D795',
        btnBlue: '#2A5CF0',
        footerBg: '#100C42',
        gStart: '#01047D',
        gEnd: '#003ADB',
      },
      container: {
        center: true,
      },
      fontSize: {
        tiny: '15px',
      },
      spacing: {
        '0p': '0%',
        '10p': '10%',
        '20p': '20%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '90p': '90%',
        '100p': '100%',
        '310p': '310%',
      },
    },
  },
  plugins: [],
}
