<template>
  <el-card class="site-stats scrollbar-mini">
    <div class="flex-inline">
      <el-avatar :size="80" :src="$withBase('/avatar.png')" class="mr-10"></el-avatar>
      <p class="author-desc">{{ author.description }}</p>
    </div>
    <div class="site-stats-content flex-center">
      <div class="site-stats-content__item" @click="goHome">
        <div class="site-stats-content__item__count">{{ post_count }}</div>
        <div class="site-stats-content__item__label">日志</div>
      </div>
      <div class="site-stats-content__item" @click="goCategories">
        <div class="site-stats-content__item__count">{{ category_count }}</div>
        <div class="site-stats-content__item__label">分类</div>
      </div>
      <div class="site-stats-content__item" @click="goTags">
        <div class="site-stats-content__item__count">{{ tag_count }}</div>
        <div class="site-stats-content__item__label">标签</div>
      </div>
    </div>
  </el-card>
</template>

<script>
import posts_mixin from '@theme/mixin/posts'

export default {
  name: 'SiteStats',
  mixins: [posts_mixin],
  data() {
    return {}
  },
  computed: {
    post_count() {
      return this.origin_posts.length
    },
    tag_count() {
      return this.origin_tags.length
    },
    category_count() {
      return this.origin_categories.length
    },
    themeConfig() {
      return this.$site.themeConfig
    },
    author() {
      return this.themeConfig.author
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    },
    goTags() {
      this.$router.push({ path: '/tags' })
    },
    goCategories() {
      this.$router.push({ path: '/categories'})
    }
  }
}
</script>

<style lang="scss" scoped>
.site-stats {
  max-height: 450px;
  .author-desc {
    word-break: break-all;
  }
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