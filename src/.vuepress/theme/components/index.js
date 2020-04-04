import TooltipIcon from './TooltipIcon'
import LiveRe from './LiveRe'

const install = Vue => {
  [
    TooltipIcon,
    LiveRe
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}