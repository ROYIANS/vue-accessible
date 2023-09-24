import * as components from './components'
import create from './create'

const accessible = create({
  components: Object.keys(components).map(
    (key) => components[key as keyof typeof components]
  )
})

export default accessible
export const install = accessible.install
