const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
var merge = require('webpack-merge')
const path = require('path')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    port: 8585
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
})
