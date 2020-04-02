<template>
  <div class="idou-toolbar" :style="{marginTop: marginTop + 'px'}">
    <div class="item" @click="goAbout"><i class="el-icon el-icon-user-solid"></i></div>
    <div class="item"><a :href="github" target="_blank" title="github"><svg-icon icon-class="github" /></a></div>
    <div class="item"><a :href="`mailto:${email}`" target="_blank" title="E-mail"><i class="el-icon el-icon-message"></i></a></div>
    <div class="item"><i class="el-icon el-icon-chat-dot-round"></i></div>
    <div class="item"><i class="el-icon el-icon-share"></i></div>
  </div>
</template>

<script>
import affix from '@theme/utils/affix'

export default {
  name: 'IdouToolbar',
  props: {
    topOffset: {
      type: Number,
      default: 64
    }
  },
  data() {
    return {
      marginTop: this.topOffset
    }
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    author() {
      return this.themeConfig.author
    },
    github() {
      return this.author.github
    },
    email() {
      return this.author.email
    }
  },
  mounted() {
    affix(this.topOffset, (top) => {
      this.marginTop = top
    })
  },
  methods: {
    goAbout() {
      this.$router.push({ path: '/about' })
    }
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