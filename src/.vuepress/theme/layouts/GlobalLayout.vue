<template>
  <div id="global-layout">
    <div class="global-layout__page">
      <parent-layout>
        <template #page-top v-if="showPageTop">
          <div class="global-layout__page-top">
            <component :is="layout" :key="layout" />
          </div>
        </template>
        <template #page-bottom></template>
      </parent-layout>
      <idou-toolbar class="global-layout__page__tool-bar" />
      <idou-sidebar class="global-layout__page__side-bar" />
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
    max-width: 960px;
    margin: 0 auto;
    position: relative;

    &__side-bar {
      position: absolute;
      top: 75px;
      right: -17.5rem;
    }

    &__tool-bar {
      position: absolute;
      top: 134px;
      left: -4.2rem;
    }

    &-top {
      max-width: 960px;
      margin: 15px auto;
      box-sizing: border-box;
      background-color: #fff;
    }
  }

}
</style>