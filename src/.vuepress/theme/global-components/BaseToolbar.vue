<template>
  <div v-if="showToolBar" class="aidol-toolbar" :style="{marginTop: marginTop + 'px'}">
    <div class="item" @click="goAbout">
      <tooltip-icon content="关于" el-icon="el-icon-user-solid" />
    </div>
    <div v-if="github" class="item">
      <a :href="github" target="_blank">
        <tooltip-icon content="github" icon-class="github" />
      </a>
    </div>
    <div v-if="gitee" class="item">
      <a :href="gitee" target="_blank">
        <tooltip-icon content="码云" icon-class="code" />
      </a>
    </div>
    <div v-if="jianshu" class="item">
      <a :href="jianshu" target="_blank">
        <tooltip-icon content="简书" icon-class="jianshu" />
      </a>
    </div>
    <div v-if="zhihu" class="item">
      <a :href="zhihu" target="_blank">
        <tooltip-icon content="知乎" icon-class="zhihu" />
      </a>
    </div>
    <div v-if="email" class="item">
      <a :href="`mailto:${email}`" target="_blank">
        <tooltip-icon content="邮箱" el-icon="el-icon-message" />
      </a>
    </div>
    <div v-if="wechat" class="item">
      <tooltip-icon :content="`微信：${wechat}`" icon-class="wechat" />
    </div>
    <div v-if="qq" class="item">
      <tooltip-icon :content="`QQ：${qq}`" icon-class="qq" />
    </div>
    <div v-if="weibo" class="item">
      <a :href="weibo" target="_blank">
        <tooltip-icon content="微博" icon-class="weibo" />
      </a>
    </div>
    <div class="item">
      <tooltip-icon content="去评论" icon-class="comment" @click.native="goComment" />
    </div>
  </div>
</template>

<script>
import affix from '@theme/utils/affix'
import { toHash } from '@theme/utils'
import { isMobile } from '@theme/utils/adapt'

export default {
  name: 'BaseToolbar',
  props: {
    topOffset: {
      type: Number,
      default: 64
    }
  },
  data() {
    return {
      marginTop: this.topOffset,
      showToolBar: true
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
    gitee() {
      return this.author.gitee
    },
    email() {
      return this.author.email
    },
    wechat() {
      return this.author.wechat
    },
    qq() {
      return this.author.qq
    },
    jianshu() {
      return this.author.jianshu
    },
    zhihu() {
      return this.author.zhihu
    },
    weibo() {
      return this.author.weibo
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    goAbout() {
      this.$router.push({ path: '/about' })
    },
    goComment() {
      toHash('lv-container')
    },
    init() {
      affix(this.topOffset, (top) => {
        this.marginTop = top
      })
      this.showToolBar = !isMobile()
      window.addEventListener('resize', () => {
        this.showToolBar = !isMobile()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$--size: 40px;

.aidol-toolbar {
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