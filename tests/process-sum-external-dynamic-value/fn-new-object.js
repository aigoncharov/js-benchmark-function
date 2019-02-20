const {
  iteraionsNum,
  createProcessDummySum,
  updateTraceIdDummyStart,
  updateTraceIdDummyStop,
  traceIdDummy,
} = require('../globals')

const processDummySum = createProcessDummySum()

updateTraceIdDummyStart()

const fn = () => ({
  prop: traceIdDummy,
})
const t0 = Date.now()
for (let i = 0; i < iteraionsNum; i++) {
  processDummySum(fn())
}
const t1 = Date.now()
console.log(t1 - t0)

updateTraceIdDummyStop()
