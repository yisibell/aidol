export default (init_top, cb) => {
  window.addEventListener('scroll', (e) => {
    const offset = window.pageYOffset
    let top = init_top

    if ( offset > 0 ) {
      top = init_top + offset
    } else {
      top = init_top
    }
    cb(top)
  })
}