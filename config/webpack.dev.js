const path = require('path')
const uglify = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const glob = require('glob');//需要同步检查html模板，所以我们需要引入node的glob对象使用
const PurifyCSSPlugin = require("purifycss-webpack");
var website = {
  publicPath:"http://localhost:8890/"
}
module.exports = {
  mode: 'development',
  //入口文件的配置项
  entry: {
    //里面的main是可以随便写的
    main: './src/main.js',
    main2: './src/main2.js'//这里新添加一个入口文件
  },
  output: {
    //打包的路径
    path: path.resolve(__dirname,'../dist'),
    //打包的文件名称
    filename: '[name].js',//这里【name】是告诉我们入口进去的文件时什么名字，打包出来也同样是什么名字
    publicPath: website.publicPath //publicPath：主要作用是处理静态文件路径
  },
  //模块：例如解读css,图片如何转换，压缩
  module: {
    rules: [
      //babel 配置
      {
        test:/\.(jsx|js)$/,
        use:{
            loader:'babel-loader',
        },
        exclude:/node_modules/
      },
      //css loader
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{loader:'css-loader'},
          {loader: 'postcss-loader'}] //自动添加前缀
        })
        // css分离后这里需要重新配置，下面就注释了
        // use: [
        //   {loader:'style-loader'},
        //   {loader:'css-loader'}
        // ]
      },
      //less loader
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
      })
        //同上  分离less文件就注释该内容
        // use: [{
        //   loader: "style-loader" // creates style nodes from JS strings
        // }, 
        // {
        //     loader: "css-loader" // translates CSS into CommonJS
        // },
        // {
        //     loader: "less-loader" // compiles Less to CSS
        // }]
      },
      //图片loader
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [{
          loader: 'url-loader',//是指定使用的loader和loader的配置参数
          options: {
            limit: 500, //是把小于500B的文件打成Base64的格式，写入js
            outputPath: 'images/', //打包后的图片放到images文件下
          }
        }]
      },
      {
        test: /\.(html|html)$/i,
        use: ['html-withimg-loader']
      }
    ]
  },
  //插件，用于生产模板和各项功能
  plugins: [
    new uglify(),
    new HtmlWebpackPlugin(
      {
        minify:{ //是对html文件进行压缩
          removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
        },
        hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
        template:'./src/index.html' //是要打包的html模版路径和文件名称。
    }),
    new extractTextPlugin('css/index.css'), //这里的、css/index.css是分离后的路径
    new PurifyCSSPlugin({
      //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    })
  ],
  //配置webpack开发服务功能
  devServer: {
    //设置基本目录配置
    contentBase: path.resolve(__dirname,'../dist'),
    //服务器的Ip地址，可以使用Ip也可以使用localhost
    host: 'localhost',
    compress: true,
    port: 8890
  }

}