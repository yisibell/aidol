<template>
  <el-card class="post-menu scrollbar-mini">
    <div class="fs-13 mb-15 flex-center">文章目录</div>
    <el-tree :data="postMenu" :props="defaultProps" node-key="id">
      <template v-slot="{ data }">
        <a :href="`#${data.slug}`" class="post-menu__title">
          <span class="text-truncate">{{data.title}}</span>
        </a>
      </template>
    </el-tree>
    <div class="post-menu__footer">
      <read-progress v-if="readProgress.open" />
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
    readProgress() {
      return this.$site.themeConfig.readProgress
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
  max-height: 60vh;
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