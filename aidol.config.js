// themeConfig
module.exports = {
  nav: [
    { text: '首页', link: '/' },
    { text: '关于', link: '/about/' },
    { text: '标签', link: '/tags/' },
    { text: '分类', link: '/categories/' },
    { text: '归档', link: '/archive/' },
    { text: '作者博客', link: 'http://www.hongwenqing.com' },
  ],
  sidebar: false,
  smoothScroll: true,
  lastUpdated: '最后更新于', // string | boolean
  logo: '/logo.png',
  author: {
    name: 'elenh',
    description: 'hello, aidol!',
    github: 'https://github.com/yisibell',
    gitee: 'https://gitee.com/elenhong',
    email: 'yisiwings@163.com',
    wechat: 'yisi2194516801',
    qq: '123456789',
    jianshu: '',
    zhihu: '',
    weibo: ''
  },
  deploy: {
    base: '/aidol/'
  },
  siteInfo: {
    title: 'aidol',
    description: 'A theme for VuePress but not only theme',
    since: '2019',
    showMadeBy: true,
    postDirName: '_posts'
  },
  service: {
    // 来必力 评论服务
    LiveRe: {
      open: true,
      type: 'city',
      uid: 'MTAyMC80OTQyOC8yNTkyMA=='
    },
    // 不蒜子 访问统计
    busuanzi: {
      open: true,
      site_uv_header: '本站访客数',
      site_uv_footer: '人次',
      site_pv_header: '本站总访问量',
      site_pv_footer: '次',
      page_pv_header: '本文总阅读量',
      page_pv_footer: '次'
    },
    // BShare 分享服务
    BShare: {
      open: true,
      uuid: '3a6c60f8-51de-461b-a72f-055603a121fc'
    }
  },
  readProgress: {
    open: true,
    decimal: 0
  }
}