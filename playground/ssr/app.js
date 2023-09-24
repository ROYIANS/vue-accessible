import { defineComponent, h, ref } from 'vue'
import { RoyIcon } from 'vue-accessible'

const App = defineComponent({
  setup () {
    return {
      count: ref(0)
    }
  },
  render () {
    return [
      h(
        RoyIcon,
        {
          icon: 'ri:sun-line'
        },
        null
      )
    ]
  }
})

export default App
