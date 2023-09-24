<template>
  <n-layout-header :style="style" bordered class="nav">
    <n-text :depth="1" class="ui-logo" tag="div" @click="handleLogoClick">
      <img src="./assets/images/pwa-512x512.png">
      <span v-if="!isMobile">Vue Accessible</span>
    </n-text>
    <div :style="!isMobile ? 'display: flex; align-items: center;' : ''">
      <div v-if="!(isMobile || isTablet)" class="nav-menu">
        <n-menu
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :value="menuValue"
          mode="horizontal"
        />
      </div>
    </div>
    <n-popover
      v-if="isMobile || isTablet"
      ref="mobilePopoverRef"
      display-directive="show"
      placement="bottom-end"
      style="padding: 0; width: 288px"
      trigger="click"
    >
      <template #trigger>
        <n-icon size="20" style="margin-left: 12px">
          <menu-outline />
        </n-icon>
      </template>
      <div style="overflow: auto; max-height: 79vh">
        <n-menu
          :indent="18"
          :options="mobileMenuOptions"
          :render-label="renderMenuLabel"
          :value="mobileMenuValue"
          @update:value="handleUpdateMobileMenu"
        />
      </div>
    </n-popover>
    <div v-else class="nav-end">
      <n-button
        class="nav-picker"
        quaternary
        size="small"
        @click="handleLocaleUpdate"
      >
        <RoyIcon
          :icon="`${
            locale === 'zh-CN' ? 'ri:english-input' : 'ri:translate-2'
          }`"
        />
      </n-button>
      <n-button
        class="nav-picker"
        quaternary
        size="small"
        @click="handleThemeUpdate"
      >
        <RoyIcon
          :icon="`${theme === 'dark' ? 'ri:sun-fill' : 'ri:moon-clear-fill'}`"
        />
      </n-button>
      <n-button
        :href="repoUrl"
        class="nav-picker"
        quaternary
        size="small"
        tag="a"
        target="_blank"
      >
        <RoyIcon icon="ri:github-fill" />
      </n-button>
      <n-text class="nav-picker padded">
        {{ version }}
      </n-text>
      <n-button
        v-if="dev"
        class="nav-picker"
        quaternary
        size="small"
        @click="handleDisplayModeUpdate"
      >
        {{ displayModeLabelMap[displayMode] }}
      </n-button>
    </div>
  </n-layout-header>
</template>

<script lang="js">
import { computed, defineComponent, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { RoyIcon, version } from 'vue-accessible'
import { MenuOutline } from '@vicons/ionicons5'
import { repoUrl } from './utils/github-url'
import { i18n, useIsMobile, useIsTablet } from './utils/composables'
import { findMenuValue } from './utils/route'
import {
  useComponentOptions,
  useDisplayMode,
  useDocOptions,
  useLocaleName,
  useThemeName
} from './store'
import { renderMenuLabel } from './store/menu-options'

// renderIcon
function renderIcon (icon) {
  return () => h(RoyIcon, { icon })
}

const locales = {
  'zh-CN': {
    dark: '深色',
    light: '浅色',
    home: '首页',
    doc: '文档',
    example: '示例页面',
    common: '常规',
    debug: '调试',
    alreadyHome: '别点了，你已经在首页了'
  },
  'en-US': {
    dark: 'Dark',
    light: 'Light',
    home: 'Home',
    doc: 'Docs',
    example: 'Examples',
    common: 'Common',
    debug: 'Debug',
    alreadyHome: 'You are already in home page. No clicking anymore.'
  }
}

export default defineComponent({
  name: 'SiteHeader',
  components: {
    MenuOutline
  },
  setup () {
    const message = useMessage()
    const route = useRoute()
    const router = useRouter()

    const mobilePopoverRef = ref(null)
    const themeAndLocaleReg = /^(\/[^/]+){2}/

    // i18n
    const { t } = i18n(locales)

    // menu
    const menuOptionsRef = computed(() => {
      return [
        {
          key: 'home',
          label: t('home'),
          icon: renderIcon('ri:home-3-fill'),
          path: themeAndLocaleReg.exec(route.path)[0]
        },
        {
          key: 'doc',
          label: t('doc'),
          icon: renderIcon('ri:article-fill'),
          path: themeAndLocaleReg.exec(route.path)[0] + '/docs/introduction'
        },
        {
          key: 'example',
          label: t('example'),
          icon: renderIcon('ri:flask-fill'),
          path:
            themeAndLocaleReg.exec(route.path)[0] + '/components/accessible-bar'
        }
      ]
    })
    const menuValueRef = computed(() => {
      if (/\/docs\//.test(route.path)) return 'doc'
      if (/\/examples\//.test(route.path)) return 'example'
      else if (route.name === 'home') return 'home'
      return null
    })

    // mobile options
    const docOptionsRef = useDocOptions()
    const componentOptionsRef = useComponentOptions()
    const mobileMenuOptionsRef = computed(() => {
      return [
        {
          key: 'theme',
          label: themeLabelMapRef.value[themeNameRef.value]
        },
        {
          key: 'locale',
          label: localeNameRef.value === 'zh-CN' ? 'English' : '中文'
        },
        {
          key: 'home',
          label: t('home'),
          path: themeAndLocaleReg.exec(route.path)[0]
        },
        {
          key: 'doc',
          label: t('doc'),
          children: docOptionsRef.value,
          path: themeAndLocaleReg.exec(route.path)[0] + '/docs/introduction'
        },
        {
          key: 'example',
          label: t('example'),
          path:
            themeAndLocaleReg.exec(route.path)[0] +
            '/components/accessible-bar',
          children: componentOptionsRef.value
        },
        {
          key: 'github',
          label: 'GitHub'
        }
      ]
    })
    const mobileMenuValueRef = computed(() => {
      if (route.name === 'home') return 'home'
      return findMenuValue(mobileMenuOptionsRef.value, route.path)
    })

    function handleUpdateMobileMenu (value, { path }) {
      if (value === 'theme') {
        handleThemeUpdate()
      } else if (value === 'locale') {
        if (localeNameRef.value === 'zh-CN') {
          localeNameRef.value = 'en-US'
        } else {
          localeNameRef.value = 'zh-CN'
        }
      } else if (path) {
        router.push(path)
      } else {
        window.open(repoUrl, '_blank')
      }
      mobilePopoverRef.value.setShow(false)
    }

    // theme
    const themeNameRef = useThemeName()
    const themeLabelMapRef = computed(() => ({
      dark: t('light'),
      light: t('dark')
    }))

    function handleThemeUpdate () {
      if (themeNameRef.value === 'dark') {
        themeNameRef.value = 'light'
      } else {
        themeNameRef.value = 'dark'
      }
    }

    // locale
    const localeNameRef = useLocaleName()

    function handleLocaleUpdate () {
      if (localeNameRef.value === 'zh-CN') {
        localeNameRef.value = 'en-US'
      } else {
        localeNameRef.value = 'zh-CN'
      }
    }

    // display mode
    const displayModeRef = useDisplayMode()
    const displayModeLabelMap = {
      common: 'Debug',
      debug: 'Prod'
    }

    function handleDisplayModeUpdate () {
      if (displayModeRef.value === 'common') {
        displayModeRef.value = 'debug'
      } else {
        displayModeRef.value = 'common'
      }
    }

    // common
    const isMobileRef = useIsMobile()
    const isTabletRef = useIsTablet()

    function handleLogoClick () {
      if (/^(\/[^/]+){2}$/.test(route.path)) {
        message.info(t('alreadyHome'))
        return
      }
      router.push(/^(\/[^/]+){2}/.exec(route.path)[0])
    }

    return {
      renderMenuLabel,
      mobilePopoverRef,
      dev: __DEV__,
      message,
      t,
      version,
      isMobile: isMobileRef,
      isTablet: isTabletRef,
      repoUrl,
      // theme
      theme: themeNameRef,
      handleThemeUpdate,
      // displayMode
      displayMode: displayModeRef,
      displayModeLabelMap,
      handleDisplayModeUpdate,
      // locale
      locale: localeNameRef,
      handleLocaleUpdate,
      // menu
      menuOptions: menuOptionsRef,
      menuValue: menuValueRef,
      // mobile & tablet menu
      mobileMenuOptions: mobileMenuOptionsRef,
      handleUpdateMobileMenu,
      mobileMenuValue: mobileMenuValueRef,
      // common
      handleLogoClick,
      style: computed(() => {
        return isMobileRef.value
          ? {
              '--side-padding': '16px',
              'grid-template-columns': 'auto 1fr auto'
            }
          : {
              '--side-padding': '32px',
              'grid-template-columns':
                'calc(272px - var(--side-padding)) 1fr auto'
            }
      })
    }
  }
})
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
}

.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 32px;
}

.nav-menu {
  padding-left: 36px;
}

.nav-picker {
  margin-right: 4px;
}

.nav-picker.padded {
  padding: 0 10px;
}

.nav-picker:last-child {
  margin-right: 0;
}

.nav-end {
  display: flex;
  align-items: center;
}
</style>

<style>
.nav-menu .n-menu-item {
  height: calc(var(--header-height) - 1px) !important;
}
</style>
