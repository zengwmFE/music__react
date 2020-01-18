### 手动配置 webpack

#### 基础配置

1. `npm init` 创建出 `package.json`
2. 安装 `webpack` 和 `webpack-cli`、`webpack-dev-server`,本地项目以及全局安装
3. 增加 `webpack.config.js` 文件，增加`entry`,`output`以及`html-webpack-plugin`（可以将本地的一个 html 文件作为模板生成打包后的模板 html）
4. `package.json`增加 scripts:`webpack-dev-server --config webpack.config.js`
5. 也可以增加 port: `webpack-dev-server --port 9090 --config webpack.config.js`

#### 增加插件

- `clean-webpack-plugin` 每次执行 build 之后都会生成一些无法清除掉，使用这个插件可以将不使用的文件清除掉

#### 增加 loader

- style-loader css-loader css-loader
  1. style-loader 添加一个`style`标签，然后将 css 放进其中
  2. css-loader 解释`@import`和`require`后会再解析（resolve）它们，将`css`转化成`CommonJS`模块
- sass-loader less-loader 将对应的`sass`和`scss`文件编译成`CSS`文件

为了解决各浏览器对不同 CSS 的兼容，需要增加前缀

- postcss-loader 和 autoprefixer
  - 可以根据 css 属性的在不同的浏览器的不同，自动增加前缀，让浏览器能兼容这些属性
- mini-css-extract-plugin
  - 把 css 样式从 js 文件中提取到单独的 css 文件中
- url-loader 将文件转换成 base64 的资源
- file-loader 往往作为 url-loader 的 fallback 来使用，可以将`import`和`require`引入的静态资源

- **babel-loader** 将 ES6/ES7/ES8 的部分代码转成 ES5 来表示，来使代码可以兼容不同的环境，但是不能解释`promise、proxy、generator、map、set`
- **babel-core** 一般和 babel-loader 是成对匹配的

要想解析`promise、proxy、generator、map、set`
需要增加`@babel/polyfill`

**使用:@babel/preset-react 将对应的 jsx 语法转换成 js**

#### resolve

可以设置模块应该怎么解析
常用项：

- alias 别名

#### devServer 属性

通过来自 webpack-dev-server 的这些选项，来配置 webpack-dev-server 的行为

--------------至此最基本的一个 webpack--------------------

### 分成开发环境和生产环境

开发环境需要的是：
热更新，不用压缩代码，完整的 sourceMap:便于定位错误

生产环境
压缩 js 代码，压缩 css 代码，合理的 sourceMap,分割代码

用到的工具：

- `webpack-merge` 用来合并配置
- `copy-webpack-plugin` 用来复制静态文件
- `optimize-css-assets-webpack-plugin` 用来压缩 css
- `uglify-webpack-plugin` 用来压缩 js
- `optimization.splitChunks` 代替 4.x 之前的`CommonsChunkPlugin`用来建立一个独立文件的功能
  webpack 将会根据以下条件自动分割快
- 可以共享新块，或者模块来自`node_modules`文件
- 新的块将大于 30kb
- 按需加载块时，并行请求的最大数量将小于或等于 5
- 初始页面加载时并行请求的最大数量将小于或等于 3

---

当前代码打包时间： 18221ms
打包完的文件：css:402 bytes js:320kib

打包优化：

1. 减少文件的搜索范围

- alias 别名的配置：当代码中出现`import "react"`的时候，webpack 会采用向上递归的方式去`node_modules`文件中找（其他的文件有其他文件的查找初始目录）。为了减少搜索范围我们可以直接告诉 webpack 去哪个路径下去查找。也就是别名的配置
- `include,exclude`的配置也可以减少一些没必要查询的文件的寻找，比如图片，js，css，音频文件之类的，可以指定文件目录去操作
- extensions webpack 会根据 extensions 设置的优先级去匹配文件，最好是把使用频率高的文件格式放在前面

2. happyPack 使用 HappyPack 开启多进程 Loader 转换

   > 在 webpack 构建的过程中，实际上耗费的时间大多数用在了 loader 解析转换和代码的压缩中,日常开发中，需要对 js,css,图片等资源进行转换，而且转换的过程中的数据量大。但是由于 js 是单线程的，并不能同时对多种资源进行转换

3. ParallelUglifyPlugin 对 js/es 进行深度压缩
