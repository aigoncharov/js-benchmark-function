const { iteraionsNum } = require('../globals')

const fn = () => ({
  prop: 1,
})
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  const dummy = fn()
}
console.timeEnd()
