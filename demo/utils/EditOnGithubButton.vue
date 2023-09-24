<template>
  <n-button
    :href="url"
    :quaternary="quaternary"
    :size="size"
    :text="!quaternary"
    :theme-overrides="
      quaternary
        ? {
          paddingTiny: '4px',
          heightTiny: '14px'
        }
        : undefined
    "
    class="edit-button"
    tag="a"
    target="_blank"
  >
    <template #icon>
      <n-icon>
        <roy-icon icon="ri:pencil-fill" />
      </n-icon>
    </template>
  </n-button>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { blobUrl } from './github-url'

export default defineComponent({
  name: 'EditOnGithubButton',
  components: {},
  props: {
    relativeUrl: {
      type: String,
      required: true
    },
    text: Boolean,
    quaternary: Boolean,
    size: {
      type: String,
      default: 'tiny'
    }
  },
  setup (props) {
    return {
      url: blobUrl + props.relativeUrl
    }
  }
})
</script>
