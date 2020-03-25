import { counter } from '@theme/utils'
import { formatDay } from '@theme/utils/day'

export default {
  computed: {
    // 全站文章数据
    origin_posts() {
      const { $site } = this
      const { pages } = $site

      return pages.filter(v => v.path.indexOf('/_posts') >= 0).map(v => {
        const { path, key, excerpt } = v
        const { title, date, tags, categories } = v.frontmatter
        const date_ms = +new Date(date)

        return {
          key,
          path,
          date: formatDay(date),
          date_ms,
          title,
          tags,
          categories,
          excerpt
        }
      }).sort((a, b) => {
        const date_a = a.date_ms
        const date_b = b.date_ms

        if (date_a > date_b) return -1
        else if (date_a < date_b) return 1
        else return 0
        
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