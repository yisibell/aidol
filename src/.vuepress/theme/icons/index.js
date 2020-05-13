
import SvgIcon from '@aidol/svg-icon'// svg component

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

function install(Vue) {
  // register globally
  Vue.component('svg-icon', SvgIcon)
  requireAll(req)
}

export default {
  install
}

