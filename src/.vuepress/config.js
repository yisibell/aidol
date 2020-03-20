const themeConfig = require('../../idou.config.js')

module.exports = {
  base: '/idou/',
  title: 'idou',
  dest: './dist',
  description: 'A theme for VuePress',
  themeConfig,
  plugins: [
    [require('./plugins/post-menu.js')],
    '@vuepress/back-to-top'
  ]
}