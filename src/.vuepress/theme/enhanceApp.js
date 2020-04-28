import ElementUI from './plugins/element-ui/2.13.0/lib/index.js'
import './plugins/element-ui/2.13.0/lib/theme-chalk/index.css'
import './styles/main.scss'
import Icons from './icons'
import CustomUI from './components'
import Layer from './utils/layer'
import MarkdownComponents from './markdown-components'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(ElementUI)
  // svg图标
  Vue.use(Icons)
  // 自定义UI
  Vue.use(CustomUI)
  // 弹出层
  Vue.prototype.$layer = Layer
  // markdown 文件专用组件
  Vue.use(MarkdownComponents)
}