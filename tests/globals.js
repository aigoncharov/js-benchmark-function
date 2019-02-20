const iteraionsNum = 1000000000

const processDummyNothing = ({ prop }) => {}

const createProcessDummySum = () => {
  let sum = 1
  return ({ prop }) => {
    sum += prop
  }
}

let traceIdDummy = 1
const updateTraceIdDummy = () => {
  traceIdDummy = Math.round(Math.random()) + 1
}
let timer
const updateTraceIdDummyStart = () => {
  timer = setInterval(updateTraceIdDummy, 10)
}
const updateTraceIdDummyStop = () => {
  clearInterval(timer)
}

module.exports = {
  iteraionsNum,
  processDummyNothing,
  createProcessDummySum,
  updateTraceIdDummyStart,
  updateTraceIdDummyStop,
  traceIdDummy,
}
