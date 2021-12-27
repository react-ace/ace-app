const postcssNormalize = require('postcss-normalize');

module.exports = (ctx) => ({
  indent: 'postcss',
  sourceMap: true,
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    postcssNormalize(),
  ],
});
