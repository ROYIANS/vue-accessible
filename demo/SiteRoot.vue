<template>
  <component
    :is="configProvider"
    :date-locale="dateLocale"
    :hljs="hljs"
    :locale="locale"
    :theme="theme"
    :theme-name="themeName"
    class="demo"
    namespace="naive-ui-doc"
    preflight-style-disabled
  >
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <Site />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
    <n-global-style />
  </component>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { initRouter, siteSetup } from './store'
import Site from './Site.vue'

export default defineComponent({
  name: 'SiteProvider',
  components: {
    Site
  },
  setup () {
    initRouter(useRouter(), useRoute())
    return siteSetup()
  }
})
</script>
