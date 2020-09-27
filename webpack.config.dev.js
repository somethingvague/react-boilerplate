const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
