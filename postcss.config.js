module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-font-magician': {
      protocol: 'https:',
      foundries: ['google'],
    },
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/,
    },
    'postcss-aspect-ratio-mini': {},
  },
};
