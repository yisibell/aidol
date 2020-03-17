module.exports = {
  base: '/idou/',
  title: 'idou',
  description: 'A theme for VuePress',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '关于', link: '/about/' },
      { text: '标签', link: '/tags/' },
      { text: '分类', link: '/categories/' },
      { text: '归档', link: '/archive/' },
      { text: '作者博客', link: 'http://www.hongwenqing.com' },
    ],
    displayAllHeaders: true,
    sidebar: 'auto'
  }
}