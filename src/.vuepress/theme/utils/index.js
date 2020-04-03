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

export function counter(arr) {
  return arr.reduce((init, name) => {
    const index = init.findIndex(v => v.name === name)

    if (index >= 0) {
      init[index].count += 1
    } else {
      init.push({name, count: 1})
    }

    return init
  }, [])
}

export function toHash(id) {
  const a = document.createElement('a')
  a.href = `#${id}`
  a.click()
  setTimeout(() => {
    a.remove()
  }, 300)
}