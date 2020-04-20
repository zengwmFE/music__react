const webpackConfig = require('./webpack.config.js')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglify-js-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const CopyPlugin = require('copy-webpack-plugin')
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 1000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          name: 'commons',
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist')
      }
    ])
  ]
})
