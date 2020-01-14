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
