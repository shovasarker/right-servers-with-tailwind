module.exports = {
  content: ['./*.html', './dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        paste: '#44D795',
        btnBlue: '#2A5CF0',
        menuBlue: '#2852E5',
        footerBg: '#100C42',
        gStart: '#02047E',
        gEnd: '#002ABF',
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
        '70p': '70%',
        '75p': '75%',
        '90p': '90%',
        '100p': '100%',
        '130p': '130%',
        '200p': '200%',
        '220p': '220%',
        '310p': '310%',
        100: '28rem',
      },
    },
  },
  plugins: [],
}
