/**
*@author: hongwenqing
*@date: 2020-04-03
*@desc: 不蒜子 访问统计服务：http://ibruce.info/2015/04/04/busuanzi/
*/
const install = () => {
  const d = document
  const s = d.createElement('script')
  const body = d.querySelector('body')
  const aidolBusuanzi = d.querySelector('#aidol-busuanzi-script')

  s.id = 'aidol-busuanzi-script'
  s.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  s.defer = true

  if (aidolBusuanzi) aidolBusuanzi.remove()
  body.append(s)
}

export default {
  install
}