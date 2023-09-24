<template>
  <n-h1 :id="id" class="naive-doc-title">
    <span>{{ text }}</span>
    <span class="edit-button">
      <n-tooltip :show-arrow="false" placement="right">
        <template #trigger>
          <edit-on-github-button
            :relative-url="relativeUrl"
            class="edit-button"
            quaternary
            text
          />
        </template>
        {{ t('editOnGithub') }}
      </n-tooltip>
    </span>
  </n-h1>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { i18n } from './composables'
import EditOnGithubButton from './EditOnGithubButton.vue'

export default defineComponent({
  name: 'EditOnGithubHeader',
  components: {
    EditOnGithubButton
  },
  props: {
    relativeUrl: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup () {
    return {
      ...i18n({
        'zh-CN': {
          editOnGithub: '在 GitHub 上编辑'
        },
        'en-US': {
          editOnGithub: 'Edit on GitHub'
        }
      })
    }
  },
  computed: {
    id () {
      return this.text.replace(/ /g, '-')
    }
  }
})
</script>

<style scoped>
.naive-doc-title {
  display: flex;
}

.naive-doc-title .edit-button {
  margin-left: 2px;
  display: inline-flex;
  align-items: center;
}
</style>
