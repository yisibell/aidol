<template>
  <div class="idou-sidebar">
    <site-stats class="mb-15" />
    <ads-board class="mb-15" />
    <post-menu />
  </div>
</template>

<script>
import SiteStats from '@theme/components/SiteStats'
import PostMenu from '@theme/components/PostMenu'
import AdsBoard from '@theme/components/AdsBoard'

export default {
  name: 'IdouSidebar',
  components: {
    SiteStats,
    PostMenu,
    AdsBoard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.idou-sidebar {
  width: 16.5rem;
}
</style>