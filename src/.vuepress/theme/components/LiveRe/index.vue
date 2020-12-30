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
    this.createListeners()
  },
  beforeDestroy() {
    this.removeListeners()
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
      j.src = `https://cdn-city.livere.com/js/embed.dist.js`
      j.setAttribute('async', true)
      
      if (aidolLivereScript) {
        aidolLivereScript.remove()
      }
      
      d.body.appendChild(j)

    },
    clear() {
      const iframes = document.querySelectorAll('#lv-container iframe')

      if (iframes && iframes.length > 0) {
        [...iframes].filter(el => {
          return el.id.includes('comment')
        }).forEach((el, i) => {
          if (i > 0) el.remove()
        })
      }
    },
    createListeners() {
      window.addEventListener('load', this.init)
      window.addEventListener('scroll', this.clear)
    },
    removeListeners() {
      window.removeEventListener('load', this.init)
      window.removeEventListener('scroll', this.clear)
    }
  }
}
</script>

<style lang="scss" scoped>
.live-re-container {
  padding: 20px;
}
</style>