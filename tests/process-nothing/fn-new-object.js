const { iteraionsNum, processDummyNothing } = require('../globals')

const fn = () => ({
  prop: 1,
})
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  processDummyNothing(fn())
}
console.timeEnd()
