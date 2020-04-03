<!--
@author: hongwenqing
@date: 2020-04-03
@desc: 来必力 评论服务
-->
<template>
  <div id="live-re-container">
    <!-- 来必力City版安装代码 -->
    <div id="lv-container" :data-id="type" :data-uid="uid">
    <script type="text/javascript">
      (function(d, s) {
          var j, e = d.getElementsByTagName(s)[0];

          if (typeof LivereTower === 'function') { return; }

          j = d.createElement(s);
          j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
          j.async = true;

          e.parentNode.insertBefore(j, e);
      })(document, 'script');
    </script>
    <noscript>为正常使用来必力评论功能请激活JavaScript</noscript>
    </div>
    <!-- City版安装代码已完成 -->
  </div>
</template>

<script>
export default {
  name: 'LiveRe',
  data() {
    return {}
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    service() {
      return this.themeConfig.service
    },
    type() {
      return this.service.LiveRe.type
    },
    uid() {
      return this.service.LiveRe.uid
    }
  }
}
</script>

<style lang="scss" scoped>
#live-re-container {
  padding: 20px;
}
</style>