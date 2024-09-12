const path = require('path')
const { config } = require('@vue/cli-plugin-eslint/eslintOptions')

// const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/lawinfopedia/',
  // 访问网址的转发
  devServer: {
    proxy: {
      glimg: {
        target: 'http://221.122.67.142:3002/', // 北京ip
        changeOrigin: true,
        pathRewrite: {
          '^/glimg': ''
        }
      }
      // glimg: {
      //   target: `http://10.85.222.17:3002/`, //
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/glimg': '',
      //   },
      // },
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },

  css: {
  },

  lintOnSave: false,
  // 定义一些变量
  // 比如路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('comps', path.join(__dirname, 'src/components'))
      .set('imgs', path.join(__dirname, 'src/assets/img'))
    // svg图标加载
    config.plugins.delete('prefetch')
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icon'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // pluginsOptions: {
  //   'style-resources-loader': {
  //     preprocess: 'less',
  //     patterns: [
  //       path.resolve(__dirname, './src/assetes/css/common.less')
  //     ]
  //   }
  // }
}
