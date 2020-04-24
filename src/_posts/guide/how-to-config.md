---
title: aidol 配置说明
date: 2020-04-24
tags:
- aidol config
categories:
- aidol文档
---

**aidol** 提供个性化配置，你可以通过修改项目根目录下的 **aidol.config.js** 文件来定制你的博客。

<!-- more -->

# 定义

**aidol.config.js** 是 <a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html">vuepress默认主题配置</a> 的混合体。所以 **vuepress默认主题** 的一些配置项你也可以在 **aidol.config.js** 中使用，但某些配置项的修改会影响到 **aidol** 的布局体现，那这些配置建议不要修改（除非你需要修改 aidol 的原始实现）。

# 配置

## author

该配置项用于定义作者信息。这些信息分别会出现在 **站点统计面板**、**左侧工具栏**、**站点页脚**。

``` js
{
  // 作者名称
  name: 'elenh',
  // 作者描述
  description: 'hello, aidol!',

  // 下方的配置会出现在站点左侧工具栏：
  // 作者 github 链接
  github: 'https://github.com/yisibell',
  // 作者 码云gitee 链接
  gitee: 'https://gitee.com/elenhong',
  // 作者邮箱，点击工具栏邮箱图标会直接弹出系统邮箱，与作者发邮件。
  email: 'yisiwings@163.com',
  // 作者微信号（仅显示）
  wechat: 'yisi2194516801',
  // 作者 QQ 号（仅显示）
  qq: '123456789',
  // 作者简书链接
  jianshu: '',
  // 作者知乎链接
  zhihu: '',
  // 作者微博链接
  weibo: ''
}
```

::: tip
**作者author** 配置中，社交账号类的配置项，会出现在站点左侧悬浮工具条中，如果为空，则不会出现。
:::

## deploy

站点部署相关配置。

``` js
{
  // 部署站点的基础路径
  base: '/aidol/'
}
```

::: tip
**base** 指定部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 **Gitee pages**，如果你想将你的网站部署到 `https://foo.gitee.io/bar/`，那么 **base** 应该被设置成 `"/bar/"`，它的值应当总是以斜杠开始，并以斜杠结束。

**base** 将会作为前缀自动地插入到所有以 `/` 开始的其他选项的链接中，所以你只需要指定一次。
:::

## siteInfo

配置站点信息。

``` js
{
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  title: 'aidol',
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  description: 'A theme for VuePress but not only theme',
  // 定义站点的起始时间，会出现在页脚。
  since: '2019',
  // 是否显示该项目的作者，即：Designed & Powerd by aidol，如果你愿意的话。
  showMadeBy: true,
  // 定义存放文章的文件夹名称，当你需要修改存放文章的文件夹时，你需要在这里同步修改下名称。
  postDirName: '_posts'
}
```

## service

该配置项用来配置 **aidol** 使用的第三方服务的账号信息。

### 来必力评论服务

一个韩国的评论服务第三方，**aidol** 将她附着在了站点的每个页面的下方，她可以使用社交网站账户登录，免去注册过程。评论极其方便。可以提高用户的参与和沟通意愿。
同时提供管理页面，博主可以登陆来必力管理网站文章及评论内容。

``` js
LiveRe: {
  // 是否开启来必力评论。
  open: true,
  // 服务类型，不用修改它，因为只有 city 是免费的。
  type: 'city',
  // 为站点注册评论服务后生成的 uid。
  uid: 'MTAyMC80OTQyOC8yNTkyMA=='
}
```

**aidol** 已经为你实现了对接 **来必力** 免费版评论服务的所有功能，所以你只需要去 <a href="https://www.livere.com/login_form">来必力官网</a> 注册一个账号获取到你的 `uid` 配置到上方即可。

具体的注册流程这里就不展开了（因为真的很简单）。有问题可以留言！

### 不蒜子访问统计

这是个开源的站点页面访问统计服务，官网链接：<a href="http://ibruce.info/2015/04/04/busuanzi/">busuanzi</a>。

``` js
busuanzi: {
  // 是否开启访问统计
  open: true,
  // 站点总访客数的前缀显示文案
  site_uv_header: '本站访客数',
  // 站点总访客数的后缀显示文案
  site_uv_footer: '人次',
  // 站点总访问量的前缀显示文案
  site_pv_header: '本站总访问量',
  // 站点总访问量的后缀显示文案
  site_pv_footer: '次',
  // 单篇文章的访问量前缀显示文案
  page_pv_header: '本文总阅读量',
  // 单篇文章的访问量后缀显示文案
  page_pv_footer: '次'
}
```

::: tip
busuanzi 访问统计不需要用户注册，就可以使用（对接工作 aidol 已经处理好了），如果，你需要修改有关她的内部实现吗，请查阅其官网。
:::

### BShare 分享服务

这是一个国内的开放性分享平台，可以通过她将站点当前页面分享至各大社交、门户平台。

``` js
BShare: {
  // 是否开启分享服务
  open: true,
  // 当前站点 BShare 分享服务账号 uuid
  uuid: '3a6c60f8-51de-461b-a72f-055603a121fc'
}
```

想要使用她，同样的，也是先去 <a href="http://www.bshare.cn/"> BShare </a> 注册一个账号，然后到管理页面获取到 `uuid` 配置到上方即可。


## readProgress

文章阅读进度提示。

``` js
{
  // 是否开启阅读进度
  open: true,
  // 进度显示的小数位
  decimal: 0
}
```

# 其他配置

前面说到，**aidol.config.js** 其实与 **@vuepress/theme-default** 主题的配置进行了混合，默认情况下，建议不要随意修改，除非你已经了解了 **aidol** 继承 **默认主题** 的实现逻辑。

``` js
{
  // 站点顶部导航栏链接
  nav: [
    // link 请保持不变，text 可修改
    { text: '首页', link: '/' },
    { text: '关于', link: '/about/' },
    { text: '标签', link: '/tags/' },
    { text: '分类', link: '/categories/' },
    { text: '归档', link: '/archive/' },
    // 可删除
    { text: '作者博客', link: 'http://www.hongwenqing.com' }
  ],
  // 是否显示默认主题的侧边栏，请保持她为 false
  // 因为aidol，对比她做了更优的实现，对应的功能是 "文章目录"
  // aidol 会自动根据文章的 标题（markdown标题语法）自动生成树形结构的文章目录。
  sidebar: false,
  // 是否启用页面滚动效果
  smoothScroll: true,
  // 你可以通过该选项，来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)
  // 同时它将以合适的日期格式显示在每一页的底部。
  lastUpdated: '最后更新于', // string | boolean
  // 你可以通过该配置，增加导航栏 Logo ，Logo 可以被放置在公共文件目录 "src/.vuepress/public"
  logo: '/logo.png'
}
```

::: warning
对于 <a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F"> vuepress默认主题-侧边栏</a> 的相关配置，在 **aidol** 中都不可使用。
因为 **aidol** 的布局实现，只继承了 **@vuepress/theme-default** 的 **导航栏** 部分。
:::

