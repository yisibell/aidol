/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validEmail(str) {
  var emailRegExp = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/
  return emailRegExp.test(str)
}
