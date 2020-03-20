<template>
  <div class="idou-sidebar" :style="{marginTop: marginTop + 'px'}">
    <site-stats class="mb-15" />
    <ads-board class="mb-15" />
    <post-menu />
  </div>
</template>

<script>
import SiteStats from '@theme/components/SiteStats'
import PostMenu from '@theme/components/PostMenu'
import AdsBoard from '@theme/components/AdsBoard'
import affix from '@theme/utils/affix'

export default {
  name: 'IdouSidebar',
  props: {
    topOffset: {
      type: Number,
      default: 0
    }
  },
  components: {
    SiteStats,
    PostMenu,
    AdsBoard
  },
  data() {
    return {
      marginTop: this.topOffset
    }
  },
  mounted() {
    affix(this.topOffset, top => {
      this.marginTop = top
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.idou-sidebar {
  width: 16.5rem;
}
</style>