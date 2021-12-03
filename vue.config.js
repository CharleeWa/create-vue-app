const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const timestamp = new Date().getTime()
const path = require('path')
const production = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: !production,
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/assets/less/theme.less'
          )}";`
        }
      }
    }
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${timestamp}.js`,
      chunkFilename: `js/[name].${timestamp}.js`
    }
  }
}
