<template>
  <n-layout
    :native-scrollbar="false"
    :position="isMobile ? 'static' : 'absolute'"
    :style="isMobile ? undefined : 'top: var(--header-height);'"
  >
    <div class="banner" style="overflow: hidden">
      <div class="banner-text">
        <n-h1 :style="titleStyle" class="naive-title">
          <span
            @mouseenter="handleTitleMouseEnter"
            @mouseleave="handleTitleMouseLeave"
          >Vue{{ hover ? '💖' : '❤️‍🩹' }}Accessible</span>
        </n-h1>
        <n-p style="font-size: 16px; margin-top: 0; margin-bottom: 0">
          {{ t('intro1') }}
        </n-p>
        <n-p
          style="
            font-size: 16px;
            margin-bottom: 4px;
            margin-top: 4px;
            font-weight: 500;
          "
        >
          {{ t('intro2') }}
        </n-p>
        <n-p style="font-size: 16px; margin-top: 0">
          {{ t('intro3') }}
        </n-p>
        <div>
          <n-button
            :ghost="theme === 'dark'"
            size="large"
            type="primary"
            @click="handleStartClick"
          >
            {{ t('start') }}
          </n-button>
        </div>
      </div>
      <right-image class="right-image" />
    </div>
    <n-layout-footer>
      <landing-footer centered />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="js">
import { computed, defineComponent } from 'vue'
import LandingFooter from './Footer.vue'
import rightImage from './Right.vue'
import { i18n, useIsMobile, useIsTablet } from '../../utils/composables'
import { useThemeName } from '../../store'

export default defineComponent({
  components: {
    LandingFooter,
    rightImage
  },
  setup () {
    const isMobileRef = useIsMobile()
    return {
      isMobile: isMobileRef,
      isTablet: useIsTablet(),
      theme: useThemeName(),
      titleStyle: computed(() => {
        if (isMobileRef.value) {
          return 'margin-top: 0; font-size: 64px !important'
        } else {
          return 'margin-top: 0; font-size: 80px !important'
        }
      }),
      ...i18n({
        'zh-CN': {
          start: '开始使用',
          intro1: '一个 Vue 3 无障碍插件',
          intro2: '为您的网站添加无障碍/适老化的基础功能',
          intro3: '有点意思'
        },
        'en-US': {
          start: 'Get Started',
          intro1: 'A Web accessibility tool for Vue3',
          intro2:
            'Add accessibility/age-friendly basic functionality to your website',
          intro3: 'English document is being prepared'
        }
      })
    }
  },
  data () {
    return {
      hover: false,
      themeOptions: {
        dark: {
          next: 'light'
        },
        light: {
          next: 'dark'
        }
      }
    }
  },
  methods: {
    handleStartClick () {
      this.$router.push(this.$route.path + '/docs/installation')
    },
    handleTitleMouseEnter () {
      this.hover = true
    },
    handleTitleMouseLeave () {
      this.hover = false
    }
  }
})
</script>

<style scoped>
.banner {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
}

.banner-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  justify-content: center;
  z-index: 1;
}

.naive-title {
  line-height: 1;
  font-family: Metropolis, sans-serif;
  margin-bottom: 18px !important;
}

.right-image {
  filter: v-bind("theme === 'dark' ? 'brightness(0.2) blur(2px)' : ''");
}

@media only screen and (max-width: 1920px) {
  .right-image {
    left: calc(50% + 230px);
    width: calc(50% - 270px);
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 440px;
    padding: 20px;
    background: #def6e5;
  }

  .right-image:before {
    content: '';
    position: absolute;
    background: #def6e5;
    width: 100%;
    height: 100%;
    left: -99%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
}

@media only screen and (min-width: 1920px) {
  .right-image {
    right: 0;
    width: 700px;
  }
}

.right-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 1023px) {
  .banner {
    position: static;
    text-align: left;
    padding-left: 16px;
    transform: none;
    padding-top: 60px;
    padding-right: 16px;
    min-height: 550px;
    height: calc(100vh - 124px);
  }

  .banner-text {
    width: 90%;
  }

  .right-image {
    position: absolute;
    left: 0;
    top: 0;
    min-width: unset;
    width: 100%;
    transform: none;
    opacity: 0.5;
    filter: blur(2px);
    padding: 0;
    background: transparent;
  }
}
</style>
