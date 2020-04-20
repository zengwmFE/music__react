const path = require('path')
const os = require('os')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包后的目录
    filename: 'assets/js/[name].[hash:8].js',
    chunkFilename: 'assets/js/[name].[hash:8].js'
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components')
    },
    // 扩展名
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ca]ss$/, //正则匹配，scss和sass文件
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader'
          },
          'sass-loader'
        ], // 从右往左解析，sass-loader将sass编译成css文件，css-loader将css编译成js脚本
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets')],
        exclude: /node_modules/
      },
      {
        test: /\.(js?x|ts)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ],
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:8].css',
      chunkFilename: 'assets/css/[id].[hash:8].css'
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development'
          }
        },
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader'
        },
        'sass-loader'
      ]
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool, // 共享线程池
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      ]
    }),
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      include: [path.resolve(__dirname, '../src')],
      exclude: /node_modules/,
      uglifyJS: {
        compress: {
          collapse_vars: true,
          dead_code: true,
          drop_console: true,
          join_vars: true,
          reduce_vars: true
        },
        output: {
          beautify: false,
          comments: false
        },
        nameCache: null, // or specify a name cache object
        toplevel: false,
        ie8: false,
        warnings: false
      }
    })
  ]
}
