const path = require('path');
const module_ = require('./webpack.config')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, './static/frontend'),
    publicPath: '/static/frontend/',
  },
  ...module_
};
