<!--
@author: hongwenqing
@date: 2020-04-07
@desc: 阅读进度
-->
<template>
  <div class="read-progress">{{ percent }}%</div>
</template>

<script>
export default {
  name: 'ReadProgress',
  data() {
    return {
      percent: 0
    }
  },
  computed: {
    readProgress() {
      return this.$site.themeConfig.readProgress
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const win_h = window.innerHeight
      const body_sh = document.body.scrollHeight
      const sum = body_sh - win_h
      
      window.addEventListener('scroll', () => {
        let y = window.pageYOffset
        if ( y > sum ) y = sum
        this.percent = (y / sum * 100).toFixed(this.readProgress.decimal)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.read-progress {
  text-align: center;
  font-size: 14px;
}
</style>