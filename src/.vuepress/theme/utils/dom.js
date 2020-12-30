/**
 * 删除某元素下所有子节点
 * @author hongwenqing(elenh)
 * @date
 * @param {HTMLElement | Selector } p 父元素或选择器
 * @return
 */
export function removeAllChild(p) {
  p = typeof p === 'string' ? document.querySelector(p) : p

  while (p.hasChildNodes()) {
    p.removeChild(p.firstChild);
  }
}
