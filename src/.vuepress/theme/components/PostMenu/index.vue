<template>
  <el-card class="post-menu">
    <div class="f-13 mb-15 flex-center">文章目录</div>
    <el-tree :data="postMenu" :props="defaultProps" node-key="id">
      <template v-slot="{ data }">
        <a :href="`#${data.slug}`" class="post-menu__title">
          <span class="text_overflow_1">{{data.title}}</span>
        </a>
      </template>
    </el-tree>
    <div class="post-menu__footer">
      <div v-if="busuanzi.open" class="flex-center">
        <div id="busuanzi_container_page_pv" style="display:none">
          <span>{{ busuanzi.page_pv_header }}</span>
          <span id="busuanzi_value_page_pv" class="mr-6 ml-6"></span>
          <span>{{ busuanzi.page_pv_footer }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'PostMenu',
  data() {
    return {
      postMenu: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    busuanzi() {
      return this.themeConfig.service.busuanzi
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const { headers } = this.$page
      this.postMenu = this.generateHeadersTree(cloneDeep(headers))
    },
    // 生成标题树
    generateHeadersTree(headers = [], res = []) {
      return headers.reduce((init, v, i) => {
        const { level } = v // 当前遍历对象
        const len = init.length // 已生成数据长度
        v.id = i

        if (len === 0) {
          init.push(v)
        } else {
          this.recursionChild(init, v)
        }

        return init
      }, res)

    },
    // 递归生成子集标题树
    recursionChild(init, v) {
      const { level } = v // 当前遍历对象
      const len = init.length // 已生成数据长度
      const last_h = init[len-1] // 最后一条

      if (level === last_h.level) {
        init.push(v)
      } else if (level > last_h.level) {
        const child = last_h.children
        if (child && child.length > 0) {
          // 递归
          this.recursionChild(child, v)
        } else {
          last_h.children = [v]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-menu {
  max-height: 68vh;
  overflow-y: auto;
  &__title {
    color: rgb(105, 102, 102);
    font-size: 13px;
  }

  &__footer {
    box-sizing: border-box;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>