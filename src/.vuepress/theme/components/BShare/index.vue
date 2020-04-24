<!--
@author: hongwenqing
@date: 2020-04-08
@desc: BShare 分享服务
-->
<template>
  <div class="b-share">
    <a v-if="showbs" class="bshareDiv" href="//www.bshare.cn/share"></a>
  </div>
</template>

<script>
import { isMobile } from '@theme/utils/adapt'

export default {
  name: 'BShare',
  data() {
    return {
      bp: 'qqmb,bsharesync,sinaminiblog,qzone,189share,sohuminiblog,renren,xinhuamb,tianya,shouji,ifengmb,neteasemb,qqxiaoyou,kaixin001,weixin,douban,qqim',
      isMobile: false
    }
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    BShare() {
      return this.themeConfig.service.BShare
    },
    showbs() {
      return this.BShare.open && !this.isMobile
    }
  },
  mounted() {
    this.showbs && this.init()
  },
  methods: {
    init() {
      const s = document.createElement('script')
      const isExit = document.querySelector('#aidol-bshare-script')

      s.id = 'aidol-bshare-script'
      s.charset = 'utf-8'
      s.src = `//static.bshare.cn/b/buttonLite.js#uuid=${this.BShare.uuid}&style=1&bp=${this.bp}`
      s.defer = true
      
      if (isExit) isExit.remove()
      document.body.appendChild(s)
      this.isMobile = isMobile()
    }
  }
}
</script>

<style lang="scss" scoped>
.b-share {
  position: fixed;
  bottom: 15vh;
  right: 5vw;
  z-index: 1024;
}
</style>