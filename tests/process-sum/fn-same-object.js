const { iteraionsNum, createProcessDummySum } = require('../globals')

const processDummySum = createProcessDummySum()

const obj = {
  prop: 1,
}
const fn = () => obj
const t0 = Date.now()
for (let i = 0; i < iteraionsNum; i++) {
  processDummySum(fn())
}
const t1 = Date.now()
console.log(t1 - t0)
