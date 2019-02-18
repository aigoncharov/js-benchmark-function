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
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  processDummySum(obj)
}
console.timeEnd()

updateTraceIdDummyStop()
