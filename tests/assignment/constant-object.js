const { iteraionsNum } = require('../globals')

const obj = {
  prop: 1,
}
console.time()
for (let i = 0; i < iteraionsNum; i++) {
  const dummy = obj
}
console.timeEnd()
