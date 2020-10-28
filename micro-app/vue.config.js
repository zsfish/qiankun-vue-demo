const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  outputDir: "dist",  //打包时生成的生产环境构建文件的目录
  assetsDir: 'static',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html',
  configureWebpack: {
    output: {
      library: 'child',
      chunkFilename: 'child/[name].[chunkhash].chunk.js',
      jsonpFunction: `webpackJsonp_child`,
      libraryTarget: "umd",
    },
  },
  //filenameHashing: true,// 默认情况为true
  productionSourceMap: false,
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8100/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  chainWebpack: (config) => { //  别名设置
    config.resolve.alias
      .set('@', resolve('src'));
  },
  runtimeCompiler: true,
}