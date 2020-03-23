import { counter } from '@theme/utils'
export default {
  computed: {
    // 全站文章数据
    origin_posts() {
      const { $site } = this
      const { pages } = $site

      return pages.filter(v => v.path.indexOf('/_posts') >= 0).map(v => {
        const { path, key, excerpt } = v
        const { title, date, tags, categories } = v.frontmatter
        return {
          key,
          path,
          date,
          title,
          tags,
          categories,
          excerpt
        }
      })
    },
    // 全站所有标签
    origin_tags() {
      const all_tag = this.origin_posts.reduce((arr, v) => {
        arr = arr.concat(v.tags)
        return arr
      }, [])
     
      return counter(all_tag)
    },
    // 全站所有分类
    origin_categories() {
      const all_category = this.origin_posts.reduce((arr, v) => {
        arr = arr.concat(v.categories)
        return arr
      }, [])

      return counter(all_category)
    }
  }
}