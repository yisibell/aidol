<template>
 <div class="tags">
    <div class="tags-title mb-15">All Tags</div>
    <div class="text-center fs-14">目前共计 {{origin_tags.length}} 个标签</div>
    <div class="flex-center mt-20">
      <el-tag 
        v-for="(v, i) in origin_tags" 
        :key="i"
        class="mr-10 mt-5 mb-5 cursor-pointer" 
        :size="tagPriority(v.count).size"
        :type="tagPriority(v.count).type" 
        @click="goPostList(v)"
      >
        {{ v.name }}
      </el-tag>
    </div>
 </div>
</template>

<script>
import posts_mixin from '@theme/mixin/posts'

export default {
  name: 'Tags',
  mixins: [posts_mixin],
  computed: {
    tagCountArr() {
      return this.origin_tags.map(v => v.count)
    }
  },
  methods: {
    // 标签优先级
    tagPriority(currCount) {
      const max = Math.max(...this.tagCountArr)
      const min = Math.min(...this.tagCountArr)
      if (currCount <= min) return {size: 'mini', type: 'info'}
      else if (currCount > min && currCount < max) return {size: 'small', type: 'primary'}
      else return {size: 'large', type: 'success'}
    },
    goPostList({ name }) {
      this.$router.push({path: '/', query: {tag: name}})
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 15px;
  min-height: 500px;
  &-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }
}
</style>