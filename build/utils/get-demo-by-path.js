const fs = require('fs-extra')

const demoLoader = require('../loaders/vue-accessible-demo-loader')
const docLoader = require('../loaders/vue-accessible-doc-loader')

module.exports = async function getTransformedVueSrc (path) {
  if (path.endsWith('.demo.md') || path.endsWith('.demo.vue')) {
    const code = await fs.readFile(path, 'utf-8')
    const type = path.endsWith('.vue') ? 'vue' : 'md'
    return demoLoader(code, path, type)
  } else if (path.endsWith('.md')) {
    const code = await fs.readFile(path, 'utf-8')
    return docLoader(code, path)
  }
}
