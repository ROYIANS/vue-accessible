<template>
  <n-layout
    id="demo-layout"
    :has-sider="showSider"
    :position="isMobile ? 'static' : 'absolute'"
  >
    <n-layout-sider
      v-if="showSider"
      :collapsed-width="0"
      :native-scrollbar="false"
      bordered
      collapse-mode="transform"
      collapsed-trigger-style="top: 240px; right: -20px;"
      show-trigger="arrow-circle"
      trigger-style="top: 240px;"
    >
      <n-menu
        :options="options"
        :render-label="renderMenuLabel"
        :value="menuValue"
      />
    </n-layout-sider>
    <n-layout
      ref="layoutInstRef"
      :native-scrollbar="false"
      :position="isMobile || showSider ? 'static' : 'absolute'"
      :scrollbar-props="layoutScrollbarProps"
      content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"
    >
      <router-view />
      <site-footer />
    </n-layout>
  </n-layout>
</template>

<script lang="js">
// Frame component for components & docs page
import { computed, defineComponent, ref, toRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findMenuValue } from '../utils/route'
import { useIsMobile, useIsTablet } from '../utils/composables'
import SiteFooter from './home/Footer.vue'
import { useComponentOptions, useDocOptions } from '../store'
import { renderMenuLabel } from '../store/menu-options'
import { useMemo } from 'vooks'

export default defineComponent({
  components: {
    SiteFooter
  },
  setup () {
    const route = useRoute()
    const layoutInstRef = ref(null)
    const docOptionsRef = useDocOptions()
    const componentOptionsRef = useComponentOptions()
    const optionsRef = computed(() =>
      route.path.includes('/docs/')
        ? docOptionsRef.value
        : componentOptionsRef.value
    )

    const menuValueRef = computed(() => {
      return findMenuValue(optionsRef.value, route.path)
    })
    watch(toRef(route, 'path'), (value, oldValue) => {
      const langAndThemeReg = /\/(zh-CN|en-US)\/(light|dark|os-theme)/g
      // only theme & lang change do not restore the scroll status
      if (
        value.replace(langAndThemeReg, '') !==
        oldValue.replace(langAndThemeReg, '')
      ) {
        layoutInstRef.value.scrollTo(0, 0)
      }
    })
    const isMobileRef = useIsMobile()
    const isTabletRef = useIsTablet()

    return {
      layoutScrollbarProps: {
        containerClass: 'document-scroll-container'
      },
      renderMenuLabel,
      showSider: useMemo(() => {
        return !isMobileRef.value && !isTabletRef.value
      }),
      layoutInstRef,
      options: optionsRef,
      menuValue: menuValueRef,
      isMobile: isMobileRef
    }
  }
})
</script>
