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
    description: 'hello, idou!',
    github: 'https://github.com/yisibell',
    gitee: 'https://gitee.com/elenhong',
    email: 'yisiwings@163.com',
    wechat: 'yisi2194516801',
    qq: '123456789',
    jianshu: '',
    zhihu: '',
    weibo: ''
  },
  siteInfo: {
    title: 'idou',
    description: 'A theme for VuePress but not only theme',
    since: '2019',
    showMadeBy: true
  },
  service: {
    // BShare 分享服务
    BShare: {
      uuid: '3a6c60f8-51de-461b-a72f-055603a121fc'
    },
    // 来必力 评论服务
    LiveRe: {
      type: 'city',
      uid: 'MTAyMC80OTQyOC8yNTkyMA=='
    },
    // 不蒜子 访问统计服务
    busuanzi: {
      open: true,
      site_uv_header: '本站访客数',
      site_uv_footer: '人次',
      site_pv_header: '本站总访问量',
      site_pv_footer: '次',
      page_pv_header: '本文总阅读量',
      page_pv_footer: '次'
    }
  }
}