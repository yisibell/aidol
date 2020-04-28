import AidolImage from './AidolImage'

const install = (Vue) => {
  [
    AidolImage
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}