<template>
  <div class="idou-sidebar" :style="{marginTop: marginTop + 'px'}">
    <site-stats v-show="!onlyShowPostMenu" class="mb-15" />
    <ads-board v-show="!onlyShowPostMenu" class="mb-15" />
    <post-menu v-if="showPostMenu" />
  </div>
</template>

<script>
import SiteStats from '@theme/components/SiteStats'
import PostMenu from '@theme/components/PostMenu'
import AdsBoard from '@theme/components/AdsBoard'
import affix from '@theme/utils/affix'

export default {
  name: 'IdouSidebar',
  components: {
    SiteStats,
    PostMenu,
    AdsBoard
  },
  props: {
    topOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      marginTop: this.topOffset,
      onlyShowPostMenu: false // 是否仅显示文章导航
    }
  },
  computed: {
    showPostMenu() {
      const { frontmatter } = this.$page
      return !frontmatter.custom
    }
  },
  mounted() {
    affix(this.topOffset, top => {
      this.marginTop = top
    })
    this.init()
  },
  methods: {
    init() {
      window.addEventListener('scroll', () => {
        const offset_y = window.pageYOffset
        const win_h = window.innerHeight
       
        this.onlyShowPostMenu = offset_y > win_h / 2
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-sidebar {
  width: 16.5rem;
}
</style>