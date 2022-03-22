const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'node',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  entry: './cli/vuer.js',
  output: {
    filename: 'vuer.min.js',
    path: path.resolve(),
    library: {
      type: 'global',
    }
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true
    })
  ]
}
