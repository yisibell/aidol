<template>
  <el-card class="site-stats">
    <div class="flex-inline">
      <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="mr-10"></el-avatar>
      <p>hello, idou!</p>
    </div>
    <div class="site-stats-content flex-center">
      <div class="site-stats-content__item">
        <div class="site-stats-content__item__count">66</div>
        <div class="site-stats-content__item__label">日志</div>
      </div>
      <div class="site-stats-content__item">
        <div class="site-stats-content__item__count">40</div>
        <div class="site-stats-content__item__label">分类</div>
      </div>
      <div class="site-stats-content__item">
        <div class="site-stats-content__item__count">188</div>
        <div class="site-stats-content__item__label">标签</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'SiteStats'
}
</script>

<style lang="scss" scoped>
.site-stats {
  &-content {
    margin-top: 15px;

    &__item {
      max-width: 60px;
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      &__count {
        font-size: 20px;
        margin-bottom: 8px;
      }

      &__label {
        font-size: 14px;
        color: #aaa;
      }
    }
  }
}
</style>