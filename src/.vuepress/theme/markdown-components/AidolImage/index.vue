<template>
  <div class="aidol-image"> 
    <el-image v-bind="$props" :src="url" :preview-src-list="previewSrcList"></el-image>
    <div class="flex-center f-12 fc-info mt-6"> 共 {{imgNum}} 张图</div>
  </div>
</template>

<script>
export default {
  name: 'AidolImage',
  props: {
    fit: {
      type: String,
      default: 'fill'
    },
    alt: {
      type: String,
      default: ''
    },
    lazy: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 2000
    },
    links: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    previewSrcList() {
      const arr = Array.isArray(this.links) ? this.links : [this.links]
      return arr.map(v => {
        return this.isOutLink(v) ? v : this.$withBase(v)
      })
    },
    url() {
      return this.previewSrcList[0]
    },
    imgNum() {
      return this.previewSrcList.length
    }
  },
  methods: {
    isOutLink(url) {
      const white_list = ['//', 'http://', 'https://']
      return white_list.some(v => url.indexOf(v) >= 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.aidol-image {
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 6px;
}
</style>