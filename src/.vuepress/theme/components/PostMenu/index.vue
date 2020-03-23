<template>
    <el-card>
      this is post menu.
    </el-card>
</template>

<script>
import { resolveSidebarItems } from '@parent-theme/util'

export default {
  name: 'PostMenu',
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  },
  mounted() {
    this.generateHeadTree()
    console.log(this.sidebarItems)
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    // 生成标题树
    generateHeadTree() {
      // const { $page } = this
      // const post_content = document.querySelector('.theme-default-content')
      // console.log(post_content)
    }
  }
}
</script>