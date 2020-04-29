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
      uid: 'MTAyMC80OTQyOC8yNTkyMA==' // 替换为你的
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
      uuid: '3a6c60f8-51de-461b-a72f-055603a121fc' // 替换为你的
    }
  },
  readProgress: {
    open: true,
    decimal: 0
  },
  passcode: {
    tips_text: '该文章为私密文章，请输入通行码!',
    error_text: '通行码错误!'
  },
  // algolia 搜索
  algolia: {
    // 替换为你的 algolia apiKey 及 indexName
    apiKey: '58c4fa8e19e6504dd4fd140c97f49121',
    indexName: 'aidol'
  }
}