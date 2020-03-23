<template>
 <div class="tags">
    <div class="tags-title">All Tags（{{ origin_tags.length }}）</div>
    <div class="flex-center">
      <el-badge v-for="(v, i) in origin_tags" :key="i" :value="v.count" :type="tagType(v.count)" class="mr-40 mt-10 mb-10 cursor-pointer">
        <el-tag size="small" :type="tagType(v.count)">{{ v.name }}</el-tag>
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
    font-size: 20px;
    margin-bottom: 30px;
  }
}
</style>