module.exports = (options, ctx) => {
  return {
    async ready() {
      console.log('c', ctx)
    },
    updated() {
      // ...
      console.log('c', ctx)
    },
    async generated (pagePaths) {
      // ...
    }
  }
}