import AidolImage from './AidolImage'
import AidolLink from './AidolLink'

const install = (Vue) => {
  [
    AidolImage,
    AidolLink
    
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}