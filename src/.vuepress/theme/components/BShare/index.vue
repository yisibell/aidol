<!--
@author: hongwenqing
@date: 2020-04-02
@desc: BShare 分享服务
-->
<template>
  <div>
    <a class="bshareDiv fc-white" href="http://www.bshare.cn/share" target="_blank">去分享</a>
    <script 
      type="text/javascript" 
      charset="utf-8" 
      :src="src">
    </script>
  </div>
</template>

<script>
export default {
  name: 'BShare',
  data() {
    return {
      base: 'http://static.bshare.cn/b/buttonLite.js#',
      bp: 'qqmb,bsharesync,sinaminiblog,qzone,189share,sohuminiblog,renren,xinhuamb,tianya,shouji,ifengmb,neteasemb,qqxiaoyou,kaixin001,weixin,douban,qqim'
    }
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    uuid() {
      const { uuid } = this.themeConfig.service.BShare
      return uuid
    },
    src() {
      return `${this.base}${this.uuid}&amp;style=1&amp;bp=${this.bp}`
    }
  }
}
</script>