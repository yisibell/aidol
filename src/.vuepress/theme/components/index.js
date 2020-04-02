import TooltipIcon from './TooltipIcon'

const install = Vue => {
  [
    TooltipIcon
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}