<!--
@author: hongwenqing
@date: 2020-04-03
@desc: 来必力 评论服务
-->
<template>
  <div class="live-re-container">
    <div id="lv-container" :data-id="type" :data-uid="uid">
      <noscript>为正常使用来必力评论功能请激活JavaScript</noscript>
    </div>
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
  },
  mounted() {
    this.init()
  },
  methods: {
    init(s = 'script') {
      const d = document
      let j, e = d.getElementsByTagName(s)[0];

      if (typeof LivereTower === 'function') return

      j = d.createElement(s)
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      j.async = true
      
      if (e) {
        console.log('pe', e)
        e.parentNode.insertBefore(j, e)
      } else {
        console.log('ph')
        d.head.appendChild(j)
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.live-re-container {
  padding: 20px;
}
</style>