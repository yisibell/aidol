/**
*@author: hongwenqing
*@date: 2020-04-03
*@desc: 不蒜子 访问统计服务：http://ibruce.info/2015/04/04/busuanzi/
*/
const install = () => {
  const d = document
  const s = d.createElement('script')
  const body = d.querySelector('body')
  const idouBusuanzi = d.querySelector('#idou-busuanzi-script')

  s.id = 'idou-busuanzi-script'
  s.async = true
  s.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'

  if (idouBusuanzi) idouBusuanzi.remove()
  body.append(s)
}

export default {
  install
}