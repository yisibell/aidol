<template>
  <div class="idou-home">
    <div class="post-item" v-for="(v) in posts" :key="v.key">
      <h2 class="fc-success cursor-pointer" @click="linkToPost(v.path)">{{ v.title }}</h2>
      <div>
        <span>发布于：</span><span class="f-12 fc-info mr-15">{{v.date}}</span>
        <span>分类于：</span><span class="f-12 fc-info">{{v.categories.join('，')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBody',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.posts = this.createPostList()
  },
  methods: {
    createPostList() {
      const { $site } = this
      const { pages } = $site

      return pages.filter(v => v.path.indexOf('/_posts') >= 0).map(v => {
        const { path, key } = v
        const { title, date, tags, categories } = v.frontmatter
        return {
          key,
          path,
          date,
          title,
          tags,
          categories
        }
      })
    },
    linkToPost(path) {
      this.$router.push({path})
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  height: 500px;

  .post-item {
    margin-bottom: 15px;
  }
}
</style>