<template>
  <div id="global-layout">
    <div class="global-layout__page">
      <idou-toolbar class="global-layout__page__tool-bar" />

      <div class="global-layout__page__content">
        <parent-layout>
          <template #page-top>
            <component :is="layout" :key="layout" />
          </template>
          <template #page-bottom>
            <live-re />
          </template>
        </parent-layout>
      </div>

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
  data() {
    return {}
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
    }
  }
}
</script>

<style lang="scss" scoped>
#global-layout {
  background-color: #E9ECEF;
  
  .global-layout__page {
    position: relative;
    min-height: 84.5vh;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 15px;

    &__tool-bar {
      z-index: 1024;
    }

    &__content {
      background-color: #fff;
      width: 960px;
      margin: 0 15px;
    }

    &__side-bar {
      z-index: 1;
    }
  
  }
}
</style>