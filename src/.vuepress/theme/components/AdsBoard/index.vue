<template>
  <el-card class="ads-board flex-center">
    <div class="ads-board__content">
      <div class="mb-15">广告加载中...</div>
      <div>开源不易，感谢理解。</div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'AdsBoard',
}
</script>

<style lang="scss" scoped>
.ads-board {
  min-height: 16.5rem;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #bbb;
    font-size: 14px;
  }
}
</style>