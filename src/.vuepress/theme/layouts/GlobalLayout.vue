<template>
  <div id="global-layout">
    <div class="global-layout__page">
      <parent-layout>
        <template #page-top v-if="showPageTop">
          <div class="global-layout__page-top">
            <idou-toolbar class="global-layout__page-top__tool-bar" />
            <component :is="layout" :key="layout" />
            <idou-sidebar class="global-layout__page-top__side-bar" />
          </div>
        </template>
        <template #page-bottom></template>
      </parent-layout>
    </div>
    <idou-footer />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'GlobalLayout',
  components: {
    ParentLayout
  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter
    },
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    showPageTop() {
      return this.frontmatter.custom
    }
  }
}
</script>

<style lang="scss" scoped>
#global-layout {
  background-color: #E9ECEF;
  
  .global-layout__page {
    min-height: 94vh;
    &-top {
      max-width: 960px;
      position: relative;
      margin: 15px auto;
      box-sizing: border-box;
      background-color: #fff;

      &__side-bar {
        position: absolute;
        top: 0px;
        right: -17.5rem;
      }

      &__tool-bar {
        position: absolute;
        top: 70px;
        left: -4.2rem;
      }
    }
  }

}
</style>