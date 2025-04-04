module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        light: '#DBDBDB',
        secondary: '#C9B194',
        primary: '#706D54',
        khaki: '#A08963',
        dark: '#5C593D',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '960px',
          lg: '1080px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
};
