const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'public' },
      { from: 'src/index.html' },
      { from: 'src/styles.css' }
    ]),
    new webpack.EnvironmentPlugin({'API_BASE_URL': 'http://example.com'})
  ]
}
