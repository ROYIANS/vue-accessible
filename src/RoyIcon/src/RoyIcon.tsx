import { defineComponent, type ExtractPublicPropTypes, h } from 'vue'
import { Icon } from '@iconify/vue'

export const iconProps = {
  icon: {
    type: String,
    default: ''
  }
} as const

export type IconProps = ExtractPublicPropTypes<typeof iconProps>

export default defineComponent({
  name: 'Icon',
  props: iconProps,
  setup (props) {
    return () =>
      h(Icon, {
        icon: props.icon
      })
  }
})
