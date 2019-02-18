const {
  iteraionsNum,
  processDummySum,
  updateTraceIdDummyStart,
  updateTraceIdDummyStop,
} = require('../globals')

updateTraceIdDummyStart()

const obj = {
  prop: 1,
}
const fn = () => obj
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  processDummySum(fn())
}
console.timeEnd()

updateTraceIdDummyStop()
