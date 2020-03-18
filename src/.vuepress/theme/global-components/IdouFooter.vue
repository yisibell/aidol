<template>
  <div class="idou-footer">
    <div class="idou-footer__content flex-center">
        <i class="el-icon-success mr-8"></i>
        <span class="mr-20">2019 / {{ sinceEnd }}</span>
        <i class="el-icon-user-solid mr-8"></i>
        <span>idou</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdouFooter',
  data() {
    return {}
  },
  computed: {
    sinceEnd() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-footer {
  width: 100%;
  height: 50px;
  background-color: #222222;
  color: #aaa;
  &__content {
    font-size: 14px;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>