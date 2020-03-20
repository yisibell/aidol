<template>
  <div class="idou-toolbar">
    <div class="item"><i class="el-icon el-icon-user-solid"></i></div>
    <div class="item"><i class="el-icon el-icon-phone"></i></div>
    <div class="item"><i class="el-icon el-icon-message"></i></div>
    <div class="item"><i class="el-icon el-icon-chat-dot-round"></i></div>
    <div class="item"><i class="el-icon el-icon-share"></i></div>
  </div>
</template>

<script>
export default {
  name: 'IdouToolbar',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$--size: 40px;

.idou-toolbar {
  width: $--size;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $--size;
    margin-top: 10px;
    border-radius: 50%;
    background-color: #fff;
    color: #bbb;
    cursor: pointer;
    transition: all .6s;
    &:hover {
      background-color: #000;
      opacity: .6;
      color: #fff;
      transform: scale(1.1);
    }
  }
}
</style>