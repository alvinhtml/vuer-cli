const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
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
