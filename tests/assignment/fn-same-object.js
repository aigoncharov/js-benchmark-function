const { iteraionsNum } = require('../globals')

const obj = {
  prop: 1,
}
const fn = () => obj
const t0 = Date.now()
for (let i = 0; i < iteraionsNum; i++) {
  const dummy = fn()
}
const t1 = Date.now()
console.log(t1 - t0)
