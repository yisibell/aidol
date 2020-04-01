<template>
  <div class="categories">
    <div class="categories-title mb-15">All Categories</div>
    <div class="text-center f-14">目前共计 {{origin_categories.length}} 个分类</div>
    <ul class="categories-content">
      <li 
        v-for="(v,i) in origin_categories" 
        :key="i" 
        class="categories-content__item"
        @click="goPostList(v)"
      >
        {{ v.name }} 
        <span class="f-14 count">({{v.count}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
import posts_mixin from '@theme/mixin/posts'

export default {
  name: 'Categories',
  mixins: [posts_mixin],
  methods: {
    goPostList({ name }) {
      this.$router.push({ path: '/', query: {category: name}})
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  padding: 15px 50px;
  min-height: 500px;
  
  &-title {
    text-align: center;
    font-size: 24px;
  }

  &-content {
    margin-top: 50px;
    &__item {
      height: 35px;
      line-height: 35px;
      list-style-type: disc;
      cursor: pointer;
      font-size: 16px;
      vertical-align: middle;

      &:hover {
        color: red;
      }

      .count {
        color:#bbb;
      }
    }
  }

}
</style>