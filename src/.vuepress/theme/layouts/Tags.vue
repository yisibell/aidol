<template>
 <div class="tags">
    <div class="tags-title mb-15">All Tags</div>
    <div class="text-center f-14">目前共计 {{origin_tags.length}} 个标签</div>
    <div class="flex-center mt-50">
      <el-badge v-for="(v, i) in origin_tags" :key="i" :value="v.count" :type="tagType(v.count)" class="mr-40 mt-10 mb-10 cursor-pointer">
        <el-tag size="small" :type="tagType(v.count)" @click="goPostList(v)">{{ v.name }}</el-tag>
      </el-badge>
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
    tagType(currCount) {
      const max = Math.max(...this.tagCountArr)
      const min = Math.min(...this.tagCountArr)
      if (currCount <= min) return 'info'
      else if (currCount > min && currCount < max) return 'primary'
      else return 'success'
    },
    goPostList() {
      
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