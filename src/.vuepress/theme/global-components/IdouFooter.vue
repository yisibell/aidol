<template>
  <div class="idou-footer">
    <div class="flex-center mb-15">
      <div class="mr-10">
        <svg-icon icon-class="copyright" />
        <template v-if="siteInfo.showMadeBy">
          <span>Made by </span><a class="mr-8" href="https://elenhong.gitee.io/idou/" target="_blank">idou</a>
        </template>
        <span>{{ siteInfo.since }} / {{ sinceEnd }}</span>
      </div>
    
      <div>
        <i class="el-icon-user-solid mr-8"></i>
        <span>{{ author.name }}</span>
      </div>
    </div>
    
    <div v-if="busuanzi.open" class="flex-center">
      <div id="busuanzi_container_site_pv">
        <span>{{ busuanzi.site_pv_header }}</span>
        <span id="busuanzi_value_site_pv" class="ml-6 mr-6"></span>
        <span>{{ busuanzi.site_pv_footer }}</span>
      </div>
      <span class="mr-8 ml-8">|</span>
      <div id="busuanzi_container_site_uv">
        <span>{{ busuanzi.site_uv_header }}</span>
        <span id="busuanzi_value_site_uv" class="ml-6 mr-6"></span>
        <span>{{ busuanzi.site_uv_footer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import busuanzi from '@theme/service/busuanzi'

export default {
  name: 'IdouFooter',
  data() {
    return {}
  },
  computed: {
    sinceEnd() {
      return new Date().getFullYear()
    },
    themeConfig() {
      return this.$site.themeConfig
    },
    author() {
      return this.themeConfig.author
    },
    siteInfo() {
      return this.themeConfig.siteInfo
    },
    busuanzi() {
      return this.themeConfig.service.busuanzi
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // busuanzi.install()
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-footer {
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  color: #2c2c2c;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
}
</style>