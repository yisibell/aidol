const themeConfig = require('../../idou.config.js')
const path = require('path')
const siteInfo = themeConfig.siteInfo
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/idou/',
  title: siteInfo.title,
  dest: './dist',
  description: siteInfo.description,
  themeConfig,
  plugins: [
    '@vuepress/back-to-top'
  ],
  markdown: {
    extractHeaders: ['h1', 'h2', 'h3', 'h4', 'h6']
  },
  cache: false,
  chainWebpack(config) {
    // 变更 url-loader 不处理指定文件夹下作为icon使用的svg文件
    config.module
    .rule('svg')
    .exclude.add(resolve('theme/icons'))
    .end()

    // 添加 svg-sprite-loader 处理指定文件夹下的svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('theme/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}