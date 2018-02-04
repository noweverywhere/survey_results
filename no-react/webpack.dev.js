const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080
  },
  plugins: [
    new Dotenv({
      path: './.env.dev'
    })
  ]
})
