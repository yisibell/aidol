<template>
  <parent-layout>
    <Content />
  </parent-layout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  },
  mounted() {
    console.log('站点元数据：', this.$site)
    console.log('页面元数据: ', this.$page)
  }
}
</script>