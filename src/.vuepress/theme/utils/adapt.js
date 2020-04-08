export function isMobile() {
  if (window) {
    const win_w = window.innerWidth
    return win_w <= 1024
  }
  return false
}