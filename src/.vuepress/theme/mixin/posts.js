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
      return this.origin_posts.reduce((arr, v) => {
        arr = arr.concat(v.tags)
        return [...new Set(arr)]
      }, [])
    },
    // 全站所有分类
    origin_categories() {
      return this.origin_posts.reduce((arr, v) => {
        arr = arr.concat(v.categories)
        return [...new Set(arr)]
      }, [])
    }
  }
}