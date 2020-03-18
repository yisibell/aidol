export const createLink = (href = '', type = 'link', target = 'head') => {
  const el_target = document.querySelector(target)
  const link = document.createElement(type)

  if (type === 'link') {
    link.href = href
  } else {
    link.src = href
  }
  
  el_target.appendChild(link)
}