module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        acian: {
          100: '#6769FF',
          200: '#6F7DFF',
        },
        gray: {
          titulo: '#494F66',
          paragraph: '#676F8F',
          input3: '#A3ABCC',
        },
        red: {
          rimac: '#EF3340',
        },
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      fontFamily: {
        roboto: ['Roboto'],
        lato: ['Lato script=latin rev=5'],
      },
      backgroundImage: (theme) => ({
        'panel-background-desktop': "url('./assets/bgPanelDesktop.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
