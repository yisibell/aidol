import TooltipIcon from './TooltipIcon'
import BShare from './BShare'
import LiveRe from './LiveRe'

const install = Vue => {
  [
    TooltipIcon,
    BShare,
    LiveRe
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}