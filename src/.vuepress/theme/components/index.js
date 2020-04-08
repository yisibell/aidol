import TooltipIcon from './TooltipIcon'
import LiveRe from './LiveRe'
import ReadProgress from './ReadProgress'

const install = Vue => {
  [
    TooltipIcon,
    LiveRe,
    ReadProgress
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}