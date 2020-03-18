<template>
  <div class="idou-home">
    <div class="post-item" v-for="(v) in posts" :key="v.key">
      <h2 class="fc-success cursor-pointer" @click="linkToPost(v.path)">{{ v.title }}</h2>
      <div>
        <span>发布于：</span><span class="f-12 fc-info mr-15">{{v.date}}</span>
        <span>分类于：</span><span class="f-12 fc-info">{{v.categories.join('，')}}</span>
      </div>
      <div class="mt-10">
        <el-tag v-for="(v,i) in v.tags" :key="i" size="mini" class="mr-8 mb-4 mt-4">{{ v }}</el-tag>
      </div>
    </div>

    <!-- pagination bar -->
    <div class="flex-center mt-45">
      <el-pagination 
        :background="false"
        layout="prev, pager, next"
        :total="total" 
        :current-page="form.page" 
        :page-size="form.pageSize" 
        @current-change="handleCurrentChange"
      />
    </div>
    
  </div>
</template>

<script>
import paging from '@theme/utils/paging'

export default {
  name: 'HomeBody',
  data() {
    return {
      origin_posts: [],
      posts: [],
      total: 100,
      form: {
        page: 1,
        pageSize: 10
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.origin_posts = this.createPostList()
      this.handleCurrentChange(1)
    },
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
    },
    handleCurrentChange(index) {
      this.form.page = index
      const { data, total } = paging(this.origin_posts, {currentPage: index, pageSize: 10})
      this.posts = data
      this.total = total
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;

  .post-item {
    margin-bottom: 15px;
  }
}
</style>