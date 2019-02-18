const {
  iteraionsNum,
  processDummySum,
  updateTraceIdDummyStart,
  updateTraceIdDummyStop,
  traceIdDummy,
} = require('../globals')

updateTraceIdDummyStart()

const fn = () => ({
  prop: traceIdDummy,
})
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  processDummySum(fn())
}
console.timeEnd()

updateTraceIdDummyStop()
