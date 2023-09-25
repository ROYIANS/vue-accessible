<template>
  <n-layout-footer
    :class="{
      ['footer--centered']: centered
    }"
    bordered
    class="footer"
  >
    <div class="footer-links">
      <div class="footer-links-col">
        <n-text class="col-header" depth="1">
          {{ t('link') }}
        </n-text>
        <n-button download href="/" tag="a" text>
          {{ t('home') }}
        </n-button>
        <n-button :href="t('vueLink')" target="_blank" tag="a" text>
          Vue3
        </n-button>
        <n-button href="https://www.naiveui.com/" target="_blank" tag="a" text>
          Naive UI
        </n-button>
      </div>
      <div class="footer-links-col">
        <n-text class="col-header" depth="1">
          {{ t('help') }}
        </n-text>
        <n-button text @click="push('/docs/common-issues')">
          {{ t('commonIssues') }}
        </n-button>
        <n-button text @click="push('/docs/changelog')">
          {{ t('changelog') }}
        </n-button>
        <n-button :href="`${repoUrl}/issues`" tag="a" target="_blank" text>
          {{ t('reportBug') }}
        </n-button>
      </div>
      <div class="footer-links-col">
        <n-text class="col-header" depth="1">
          {{ t('community') }}
        </n-text>
        <n-button :href="repoUrl" tag="a" target="_blank" text>
          GitHub
        </n-button>
        <n-button :href="giteeUrl" tag="a" target="_blank" text>
          Gitee
        </n-button>
      </div>
      <div class="footer-links-col footer-links-col--last">
        <n-text class="col-header" depth="1">
          {{ t('contact') }}
        </n-text>
        <n-button href="https://www.vidorra.life/" tag="a" target="_blank" text>
          {{ t('vidorra') }}
        </n-button>
      </div>
    </div>
    <n-divider class="footer-divider" />
    <div style="text-align: center; padding: 20px">
      <n-text depth="3">
        Vue Accessible {{ version }} · Made by Vidorra
      </n-text>
    </div>
  </n-layout-footer>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { version } from 'vue-accessible'
import { i18n } from '../../utils/composables'
import { push } from '../../store'
import { repoUrl, giteeUrl } from '../../utils/github-url'

export default defineComponent({
  props: {
    centered: Boolean
  },
  setup () {
    return {
      version,
      repoUrl,
      giteeUrl,
      push,
      ...i18n({
        'zh-CN': {
          link: '链接',
          home: '首页',
          help: '帮助',
          community: '社区',
          contact: '联系我们',
          changelog: '更新日志',
          commonIssues: '常见问题',
          vidorra: '小梦岛',
          reportBug: '报告 Bug',
          vueLink: 'https://cn.vuejs.org/guide/introduction.html'
        },
        'en-US': {
          link: 'Links',
          home: 'Home',
          help: 'Help',
          community: 'Community',
          contact: 'Contact Us',
          changelog: 'Change Log',
          commonIssues: 'Common Issues',
          vidorra: 'Vidorra',
          reportBug: 'Report Bug',
          vueLink: 'https://vuejs.org/guide/introduction.html'
        }
      })
    }
  }
})
</script>

<style scoped>
.footer {
  --x-padding: 56px;
  margin-top: auto;
}

.footer.footer--centered .footer-links {
  margin: auto;
  max-width: 960px;
  --x-padding: 36px;
}

.footer-links {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--x-padding);
  padding-bottom: 0;
  padding-top: 32px;
}

.footer-links-col {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 24px;
  padding-bottom: 24px;
}

.col-header {
  white-space: nowrap;
}

@media only screen and (min-width: 1024px) {
  .footer.footer--centered .footer-links-col.footer-links-col--last {
    flex: 0 0 0;
  }
}

.footer.footer--centered .footer-links-col {
  width: initial;
}

.footer-divider {
  margin: 0;
  padding: 0 var(--x-padding);
}

.footer-links-col > * {
  line-height: 2;
}

.col-header {
  font-weight: 500;
}

.link {
  text-decoration: none;
}
</style>
