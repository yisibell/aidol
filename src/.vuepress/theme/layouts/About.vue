<template>
  <div class="about">
    <h2 class="mb-10">关于 aidol</h2>
    <p>这是一个快速搭建个人博客的轻量化解决方案。</p>
    <p>它继承自 <a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html">vuepress 默认主题</a>。</p>
    <p>但 aidol 对其进行了更优的包装，使得你可以使用一个博客系统该有的功能！仅仅需要你进行一些简单的配置。</p>

    <h2>特性</h2>
    <p>1. 可使用脚手架<a href="https://www.npmjs.com/package/@aidol/cli"> @aidol/cli </a>快速搭建项目。</p>
    <p>2. 自动化的文章分类功能。</p>
    <p>3. 按照文章发布时间自动生成属于你的 "归档" 时间线。</p>
    <p>4. 博客评论功能。</p>
    <p>5. 站点、文章访问统计。</p>
    <p>6. 文章可分享至各大应用。</p>
    <p>7. 更友好、智能的分页。</p>
    <p>8. 简洁的标签功能。</p>
    <p>9. 文章密码锁。</p>
    <p>10. 更多的 markdown 功能。</p>
    <p>11. 友好的配置。</p>
    <p>更多功能，持续开发中...</p>

    <h2>作者说</h2>
    <p>作者也只是一个小厂的普通前端开发，不满于用惯了别人写的轮子，也想为大前端社区做丁点贡献，同时作者是 vue 的重度使用者，关于 vue 的一切东西都会进行尝试。</p>
    <p> hexo 已经用腻歪了，并且开发体验并不是最好的，虽然其社区拥有大量的 theme 供你使用。</p>
    <p> 反观 vuepress，theme 支持真的是少的可怜，这是不应该的。所以，我觉得我应该做点什么了。于是，aidol 应运而生。</p>
    
    <p>aidol 会持续更新！欢迎使用。</p>
    <p>如果你有新的建议或想法，欢迎在下方留言。</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 25px;
  min-height: 500px;
}
</style>