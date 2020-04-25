<template>
  <div class="layout">
    <h2 class="layout-title">{{ page.title }}</h2>
    <div class="flex-center layout-body">
      <svg-icon icon-class="date" class="mr-6 f-14" />
      <span class="mr-8">发表于</span>
      <span>{{ date || '未知时间' }}</span>
      <span class="ml-10 mr-10 pb-2"> | </span>
      <svg-icon icon-class="category" class="mr-6 f-14" />
      <span class="mr-8">分类于</span>
      <span class="cursor-pointer category mr-10" @click="goHome">{{ categories || '暂无分类' }}</span>
      <div v-if="busuanzi.open" class="flex-center">
        <div id="busuanzi_container_page_pv" style="display: none;">
          <span>{{ busuanzi.page_pv_header }}</span>
          <span id="busuanzi_value_page_pv" class="mr-6 ml-6"></span>
          <span>{{ busuanzi.page_pv_footer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { joinToStr } from '@theme/utils'
import { formatDay } from '@theme/utils/day'
import busuanzi from '@theme/service/busuanzi'

export default {
  name: 'Layout',
  data() {
    return {}
  },
  computed: {
    page() {
      return this.$page
    },
    categories() {
      return joinToStr(this.page.frontmatter.categories, ',')
    },
    date() {
      return formatDay(this.page.frontmatter.date)
    },
    themeConfig() {
      return this.$site.themeConfig
    },
    busuanzi() {
      return this.themeConfig.service.busuanzi
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    goHome() {
      this.$router.push({path: '/', query: {category: this.categories}})
    },
    init() {
      busuanzi.install()
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  &-title {
    text-align: center;
    border: none;
  }
  &-body {
    color: #909399;
    font-size: 12px;

    .category {
      color: rgb(82, 79, 79);
    }
  }
}
</style>