<template>
  <div class="layout">
    <h2 class="layout-title">{{ page.title }}</h2>
    <div class="flex-center layout-body">
      <div class="flex-inline">
        <svg-icon icon-class="date" class="mr-10" />
        <span class="mr-8">发表于</span>
        <span>{{ date }}</span>
        <span class="ml-15 mr-15"> | </span>
        <svg-icon icon-class="category" class="mr-10" />
        <span class="mr-8">分类于</span>
        <span class="cursor-pointer category">{{ categories }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { joinToStr } from '@theme/utils'
import { formatDay } from '@theme/utils/day'

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
      return joinToStr(this.page.frontmatter.categories)
    },
    date() {
      return formatDay(this.page.frontmatter.date)
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