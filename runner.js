const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const { median } = require('math-stats')

const runReps = 10

const getFsChildrenFiles = (targetPath) => {
  const folderPath = path.resolve(targetPath)
  const items = fs.readdirSync(folderPath)
  const res = []
  items.forEach((item) => {
    const itemFullPath = path.resolve(folderPath, item)
    if (fs.lstatSync(itemFullPath).isDirectory()) {
      res.push(...getFsChildrenFiles(itemFullPath))
    } else {
      res.push(itemFullPath)
    }
  })
  return res.filter((item) => !item.includes('globals'))
}

const benchmarks = getFsChildrenFiles('./tests')
benchmarks.map((benchmark) => {
  console.log(benchmark)
  const res = []
  for (let i = 0; i < runReps; i++) {
    const out = execFileSync('node', [benchmark], { encoding: 'utf8' })
    const outNum = parseInt(out)
    console.log(`#${i + 1}:`, outNum)
    res.push(outNum)
  }
  console.log('median:', median(res))
})
