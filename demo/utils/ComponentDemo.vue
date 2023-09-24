<template>
  <n-card
    v-if="showDemo"
    :id="demoFileName"
    :segmented="{
      footer: true
    }"
    class="demo-card"
    footer-style="padding: 0;"
  >
    <template #header>
      <span style="cursor: pointer" @click="handleTitleClick">
        <slot name="title" />
      </span>
    </template>
    <template #header-extra>
      <n-tooltip>
        <template #trigger>
          <edit-in-code-sandbox-button
            :code="showTs ? sfcTsCode : sfcJsCode"
            size="tiny"
            style="padding: 0; margin-right: 6px"
          />
        </template>
        {{ t('editInCodeSandbox') }}
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <edit-on-github-button
            :relative-url="relativeUrl"
            depth="3"
            size="tiny"
            style="padding: 0; margin-right: 6px"
          />
        </template>
        {{ t('editOnGithub') }}
      </n-tooltip>
      <n-tooltip>
        <template #trigger>
          <copy-code-button
            :code="showTs ? sfcTsCode : sfcJsCode"
            :success-text="t('copySuccess')"
            depth="3"
            size="tiny"
            style="padding: 0; margin-right: 6px"
          />
        </template>
        {{ t('copyCode') }}
      </n-tooltip>
      <n-tooltip ref="expandCodeButtonRef">
        <template #trigger>
          <n-button
            depth="3"
            size="tiny"
            style="padding: 0"
            text
            @click="toggleCodeDisplay"
          >
            <template #icon>
              <n-icon>
                <code-outline />
              </n-icon>
            </template>
          </n-button>
        </template>
        {{ !showCode ? t('show') : t('hide') }}
      </n-tooltip>
    </template>
    <slot name="content" />
    <slot name="demo" />
    <template v-if="showCode" #footer>
      <n-tabs
        v-if="languageType === 'ts'"
        :value="showTs ? 'ts' : 'js'"
        size="small"
        style="padding: 12px 24px 0 24px"
        type="segment"
        @update:value="($e) => (showTs = $e === 'ts')"
      >
        <n-tab name="ts">
          TypeScript
        </n-tab>
        <n-tab name="js">
          JavaScript
        </n-tab>
      </n-tabs>
      <n-scrollbar
        content-style="padding: 20px 24px;"
        style="height: auto"
        x-scrollable
      >
        <n-code v-if="showTs" :code="sfcTsCode" language="html" />
        <n-code v-else :code="sfcJsCode" language="html" />
      </n-scrollbar>
    </template>
  </n-card>
</template>

<script lang="js">
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { CodeOutline } from '@vicons/ionicons5'
import { useDisplayMode } from '../store'
import { i18n } from './composables'
import EditOnGithubButton from './EditOnGithubButton.vue'
import EditInCodeSandboxButton from './EditInCodeSandboxButton.vue'
import CopyCodeButton from './CopyCodeButton.vue'

export default defineComponent({
  components: {
    CodeOutline,
    EditOnGithubButton,
    EditInCodeSandboxButton,
    CopyCodeButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    tsCode: {
      type: String,
      required: true
    },
    demoFileName: {
      type: String,
      required: true
    },
    relativeUrl: {
      type: String,
      required: true
    },
    jsCode: {
      type: String,
      required: true
    },
    languageType: {
      type: String,
      default: 'js'
    }
  },
  setup (props) {
    const displayModeRef = useDisplayMode()
    const isDebugDemo = /(d|D)ebug/.test(props.demoFileName)
    const showDemoRef = computed(() => {
      return !(isDebugDemo && displayModeRef.value !== 'debug')
    })
    const showCodeRef = ref(false)
    const showTsRef = ref(props.languageType === 'ts')
    const expandCodeButtonRef = ref(null)
    watch(showCodeRef, () => {
      nextTick(() => {
        expandCodeButtonRef.value.syncPosition()
      })
    })
    return {
      expandCodeButtonRef,
      showDemo: showDemoRef,
      showCode: showCodeRef,
      showTs: showTsRef,
      sfcTsCode: decodeURIComponent(props.tsCode),
      sfcJsCode: decodeURIComponent(props.jsCode),
      toggleCodeDisplay () {
        showCodeRef.value = !showCodeRef.value
      },
      handleTitleClick: () => {
        window.location.hash = `#${props.demoFileName}`
      },
      toggleLanguageChange () {
        showTsRef.value = !showTsRef.value
      },
      ...i18n({
        'zh-CN': {
          show: '显示代码',
          hide: '收起代码',
          editOnGithub: '在 GitHub 中编辑',
          editInCodeSandbox: '在 CodeSandbox 中编辑',
          copyCode: '复制代码',
          copySuccess: '复制成功'
        },
        'en-US': {
          show: 'Show Code',
          hide: 'Hide Code',
          editOnGithub: 'Edit on GitHub',
          editInCodeSandbox: 'Edit in CodeSandbox',
          copyCode: 'Copy Code',
          copySuccess: 'Successfully Copied'
        }
      })
    }
  }
})
</script>
