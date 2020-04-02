// themeConfig
module.exports = {
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
  activeHeaderLinks: true,
  sidebar: false,
  smoothScroll: true,
  lastUpdated: '最后更新于', // string | boolean
  author: {
    name: 'elenh',
    github: 'https://github.com/yisibell',
    gitee: 'https://gitee.com/elenhong',
    email: 'yisiwings@163.com',
    wechat: 'yisi2194516801',
    qq: '123456789',
    jianshu: '',
    zhihu: '',
    weibo: ''
  },
  service: {
    // BShare 分享服务
    BShare: {
      uuid: '3a6c60f8-51de-461b-a72f-055603a121fc'
    }
  }
}