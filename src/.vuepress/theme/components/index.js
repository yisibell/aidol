import TooltipIcon from './TooltipIcon'
import LiveRe from './LiveRe'
import ReadProgress from './ReadProgress'
import BShare from './BShare'

const install = Vue => {
  [
    TooltipIcon,
    LiveRe,
    ReadProgress,
    BShare,
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}