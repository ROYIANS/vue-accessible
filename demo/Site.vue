<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <site-header v-if="!isDemoPage" />
    <router-view />
  </n-layout>
</template>

<script lang="js">
import { defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLoadingBar } from 'naive-ui'
import SiteHeader from './SiteHeader.vue'
import { loadingBarApiRef } from './routes/router'
import { useIsMobile } from './utils/composables'

export default defineComponent({
  name: 'Site',
  components: {
    SiteHeader
  },
  setup () {
    const loadingBar = useLoadingBar()
    const isMobileRef = useIsMobile()
    const currentRoute = useRoute()
    onMounted(() => {
      loadingBarApiRef.value = loadingBar
      loadingBar.finish()
    })
    return {
      isMobile: isMobileRef,
      isDemoPage: computed(() => {
        return currentRoute.path?.includes('/demos/')
      })
    }
  }
})
</script>
