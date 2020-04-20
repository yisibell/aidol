<template>
  <div class="idou-home">
    <div class="post-item" v-for="(v) in posts" :key="v.key">
      <div class="fc-success f-20">{{ v.title }}</div>
      <div class="mt-5">
        <el-tag v-for="(e,i) in v.tags" :key="i" size="mini" class="mr-8 mb-4 mt-4">{{ e }}</el-tag>
        <span class="f-12 fc-info mr-15">发布于：{{v.date}}</span>
        <span class="f-12 fc-info mr-15">分类于：{{v.categories.join('，')}}</span>
      </div>
      <div v-html="v.excerpt"></div>
      <div class="flex-center mb-15">
        <el-button size="mini" type="info" @click="linkToPost(v.path)">阅读全文</el-button>
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
import posts_mixin from '@theme/mixin/posts'

export default {
  name: 'Home',
  mixins: [posts_mixin],
  data() {
    return {
      posts: [],
      total: 0,
      form: {
        page: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    qs() {
      return this.$route.query
    },
    condition() {
      const { tag, category } = this.qs
      if (tag) {
        return [{key: 'tags', value: tag, validHandler: this.validHandler}]
      } else if(category) {
        return [{key: 'categories', value: category, validHandler: this.validHandler}]
      } 
      return null
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    'qs': {
      handler() {
        this.init()
      }
    }
  },
  methods: {
    init() {
      this.handleCurrentChange(1)
    },
    linkToPost(path) {
      this.$router.push({path})
    },
    handleCurrentChange(index) {
      this.form.page = index
      const { data, total } = paging(this.origin_posts, {currentPage: index, pageSize: this.form.pageSize}, this.condition)
      this.posts = data
      this.total = total
    },
    validHandler(con_val, ori_val) {
      const con_val_arr = con_val.split()
      return con_val_arr.some(v => ori_val.includes(v))
    }
  }
}
</script>

<style lang="scss" scoped>
.idou-home {
  padding: 15px 30px 15px 30px;
  .post-item {
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }
}
</style>