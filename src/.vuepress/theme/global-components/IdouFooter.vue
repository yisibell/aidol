<template>
  <div class="idou-footer">
    <div class="idou-footer__content flex-center">
      
      <svg-icon icon-class="copyright" class="mr-8" />
      <span class="mr-20">{{ siteInfo.since }} / {{ sinceEnd }}</span>
      <i class="el-icon-user-solid mr-8"></i>
      <span>{{ author.name }}</span>
       
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  color: #2c2c2c;
  &__content {
    font-size: 14px;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>