import SvgIcon from '@aidol/svg-icon/src/svg-icon'

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().forEach(requireContext)

function install(Vue) {
  // register globally
  Vue.component('svg-icon', SvgIcon)
  requireAll(req)
}

export default {
  install
}

