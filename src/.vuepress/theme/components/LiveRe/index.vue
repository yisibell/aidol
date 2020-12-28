<!--
@author: hongwenqing
@date: 2020-04-03
@desc: 来必力 评论服务
-->
<template>
  <div v-if="showLiveRe" class="live-re-container">
    <div ref="aidol-live-re-container" id="lv-container" :data-id="type" :data-uid="uid"></div>
    <noscript>为正常使用来必力评论功能请激活 JavaScript</noscript>
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
        this.$nextTick(() => {
          this.init()
        })
      }
    }
  },
  mounted() {
    this.loadedInit()
  },
  methods: {
    init() {
      if (!this.showLiveRe) return

      // clear liveRe container
      const LiveReContainerEl = this.$refs['aidol-live-re-container']

      if (LiveReContainerEl) {
        LiveReContainerEl.innerHTML = ''
      }
      
      // create and init liveRe script
      const d = document
      const j = d.createElement('script')
      const aidolLivereScript = d.querySelector('#aidol-livere-script')
      
      if (typeof LivereTower === 'function') return

      j.id = 'aidol-livere-script'
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      j.defer = true
      
      if (aidolLivereScript) {
        aidolLivereScript.remove()
      }
      
      d.body.appendChild(j)

    },
    loadedInit() {
      window.addEventListener('load', () => {
        this.init()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.live-re-container {
  padding: 20px;
}
</style>