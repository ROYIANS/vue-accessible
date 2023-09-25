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
          >404</span>
        </n-h1>
        <n-p style="font-size: 16px; margin-top: 0; margin-bottom: 0">
          {{ t('notFound') }}
        </n-p>
        <div>
          <n-button
            :ghost="theme === 'dark'"
            size="large"
            type="primary"
            text
            tag="a"
            href="/"
          >
            {{ t('home') }}
          </n-button>
        </div>
      </div>
      <span
        v-for="i in 40"
        :key="`4-${i}`"
        class="particle"
        :style="get40Styles(i)"
      >4</span>
      <span
        v-for="i in 40"
        :key="`0-${i}`"
        class="particle"
        :style="get40Styles(40 + i)"
      >0</span>
    </div>
    <n-layout-footer>
      <landing-footer centered />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="js">
import { computed, defineComponent } from 'vue'
import LandingFooter from './Footer.vue'
import { i18n, useIsMobile, useIsTablet } from '../../utils/composables'
import { useThemeName } from '../../store'

export default defineComponent({
  components: {
    LandingFooter
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
          home: '回到首页',
          notFound: '这个页面我这里还没有...🙁'
        },
        'en-US': {
          home: 'Hitch a ride back home.',
          notFound: 'That page has gone missing...'
        }
      })
    }
  },
  data () {
    return {}
  },
  methods: {
    getRandomNum (min, max) {
      const range = max - min
      const rand = Math.random()
      return min + Math.round(range * rand)
    },
    get40Styles (i) {
      const randomSize = this.getRandomNum(1, 20) + 10
      const blur = 0.02 * i
      const speed = this.getRandomNum(1, 20) + 20
      // const delay = this.getRandomNum(1, 10) * 0.1
      const animation = ['float', 'floatReverse', 'float2', 'floatReverse2']
      const anim = animation[this.getRandomNum(0, animation.length)]

      return {
        top: `${(this.getRandomNum(1, 100) / (100 + randomSize / 8)) * 100}%`,
        left: `${(this.getRandomNum(1, 100) / (100 + randomSize / 10)) * 100}%`,
        fontSize: `${randomSize}px`,
        filter: `blur(${blur}px)`,
        animation: `${speed}s ${anim} infinite`
      }
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
}

.particle {
  position: absolute;
  display: block;
  pointer-events: none;
}
</style>

<style>
@keyframes apparition {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(180px);
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(28px);
  }
}

@keyframes floatReverse2 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-28px);
  }
}
</style>
