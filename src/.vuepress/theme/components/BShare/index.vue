<!--
@author: hongwenqing
@date: 2020-04-08
@desc: BShare 分享服务
-->
<template>
  <div class="b-share">
    <a v-if="BShare.open" class="bshareDiv" href="http://www.bshare.cn/share">去分享</a>
  </div>
</template>

<script>
export default {
  name: 'BShare',
  data() {
    return {
      bp: 'qqmb,bsharesync,sinaminiblog,qzone,189share,sohuminiblog,renren,xinhuamb,tianya,shouji,ifengmb,neteasemb,qqxiaoyou,kaixin001,weixin,douban,qqim'
    }
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    BShare() {
      return this.themeConfig.service.BShare
    }
  },
  mounted() {
    this.BShare.open && this.init()
  },
  methods: {
    init() {
      const s = document.createElement('script')
      const isExit = document.querySelector('#idou-bshare-script')
      s.id = 'idou-bshare-script'
      s.type = 'text/javascript'
      s.charset = 'utf-8'
      s.src = `http://static.bshare.cn/b/buttonLite.js#uuid=${this.BShare.uuid}&style=1&bp=${this.bp}`
      if (isExit) isExit.remove()
      document.body.appendChild(s)
    }
  }
}
</script>

<style lang="scss" scoped>
.b-share {
  .bshareDiv {
    position: fixed;
    top: 50vh;
    right: 15px;
    z-index: 1024;
  }
}
</style>