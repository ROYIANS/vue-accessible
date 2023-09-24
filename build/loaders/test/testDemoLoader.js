const demoLoader = require('../vue-accessible-demo-loader')
const fs = require('fs')
const path = require('path')

const demoMd = fs
  .readFileSync(path.resolve(__dirname, 'basic.test.md'))
  .toString()
console.log(demoLoader(demoMd))
