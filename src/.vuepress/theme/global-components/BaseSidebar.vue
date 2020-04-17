<template>
  <div v-if="showSideBar" class="aidol-sidebar" :style="{marginTop: marginTop + 'px'}">
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
import { isMobile } from '@theme/utils/adapt'

export default {
  name: 'BaseSidebar',
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
      onlyShowPostMenu: false, // 是否仅显示文章导航
      showSideBar: true
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
      this.showSideBar = !isMobile()
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
.aidol-sidebar {
  width: 16.5rem;
}
</style>