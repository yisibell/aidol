import TooltipIcon from './TooltipIcon'
import BShare from './BShare'

const install = Vue => {
  [
    TooltipIcon,
    BShare
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}