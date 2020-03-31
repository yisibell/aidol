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
  ],
  markdown: {
    extractHeaders: ['h1', 'h2', 'h3', 'h4', 'h6']
  }
}