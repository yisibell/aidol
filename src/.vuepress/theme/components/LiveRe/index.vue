<!--
@author: hongwenqing
@date: 2020-04-03
@desc: 来必力 评论服务
-->
<template>
  <div v-if="showLiveRe" class="live-re-container">
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
    },
    showLiveRe() {
      return this.service.LiveRe.open
    }
  },
  watch: {
    '$route': {
      handler(r) {
        this.loadedInit()
      }
    }
  },
  mounted() {
    this.loadedInit()
  },
  methods: {
    init() {
      const d = document
      const aidolLivereScript = d.querySelector('#aidol-livere-script')
      let j, e = d.getElementsByTagName('script')[0];
      
      if (typeof LivereTower === 'function') return

      j = d.createElement('script')
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      j.async = true
      j.id = 'aidol-livere-script'
      
      if (aidolLivereScript) {
        aidolLivereScript.remove()
      }

      if (e) {
        e.parentNode.insertBefore(j, e)
      } else {
        d.head.appendChild(j)
      }

    },
    loadedInit() {
      if (this.showLiveRe) {
        window.addEventListener('load', () => {
          this.init()
        })
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