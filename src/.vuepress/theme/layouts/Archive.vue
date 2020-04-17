<template>
  <div class="archive">
    <div class="ml-14 mb-30 mt-25">目前已有 {{origin_posts.length}} 篇日志，继续加油哦！</div>

    <el-timeline>
      <el-timeline-item v-for="(v, i) in posts_in_year" :key="i" :timestamp="v.year" placement="top">
        <el-card v-for="(item, k) in v.posts" class="mb-15">
          <h4 class="f-16 mb-10 cursor-pointer" @click="goPost(item.path)">{{ item.title }}</h4>
          <div class="flex-inline fc-info f-12">
            <span>标签：</span>
            <el-tag v-for="(e, j) in item.tags" :key="j" size="mini" class="mr-6 mt-3 mb-3">{{ e }}</el-tag>
            <span>分类：</span>
            <span class="mr-15">{{ item.categories.join('，') }}</span>
          </div>
          <div class="f-12 fc-info"><span>{{ item.date }}</span></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>

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
import posts_mixin from '@theme/mixin/posts'
import paging from '@theme/utils/paging'
export default {
  name: 'Archive',
  mixins: [posts_mixin],
  data() {
    return {
      total: 0,
      posts: [], // 当前页文章
      form: {
        page: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    posts_in_year() {
      return this.posts.reduce((init, v) => {
       
        const year = `${new Date(v.date_ms).getFullYear()} 年`
        const index = init.findIndex(e => e.year === year)

        if (index >= 0) {
          init[index].posts.push(v)
        } else {
          init.push({year, posts: [v]})
        }

        return init
      }, [])
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.handleCurrentChange(1)
    },
    goPost(path) {
      this.$router.push({ path })
    },
    handleCurrentChange(index) {
      this.form.page = index
      const { data, total } = paging(this.origin_posts, {currentPage: index, pageSize: this.form.pageSize})
      this.posts = data
      this.total = total
    }
  }
}
</script>

<style lang="scss" scoped>
.archive {
  padding: 15px;
  min-height: 500px;
}
</style>