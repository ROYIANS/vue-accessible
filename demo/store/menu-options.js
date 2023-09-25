// rubbish code here

import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const renderMenuLabel = (option) => {
  if (!('path' in option) || option.label === '--Debug') {
    return option.label
  }
  return h(
    RouterLink,
    {
      to: option.path
    },
    { default: () => option.label }
  )
}

const appendCounts = (item) => {
  if (!item.children) {
    item.count = 1
    return item
  }
  if (item.children) {
    item.children.forEach(appendCounts)
    item.count = item.children.reduce((sum, item) => sum + item.count, 0)
    if (item.type === 'group') {
      item.en += ` (${item.count})`
      item.zh += ` (${item.count})`
    }
    return item
  }
}

function createItems (lang, theme, prefix, items) {
  const isZh = lang === 'zh-CN'
  const langKey = isZh ? 'zh' : 'en'
  return items.map((rawItem) => {
    const item = {
      ...rawItem,
      key: rawItem.en,
      label: rawItem[langKey] || rawItem.en,
      extra: rawItem.enSuffix && isZh ? rawItem.en : undefined,
      path: rawItem.path
        ? `/${lang}/${theme}` + prefix + rawItem.path
        : undefined
    }
    if (rawItem.children) {
      item.children = createItems(lang, theme, prefix, rawItem.children)
    }
    return item
  })
}

export function createDocumentationMenuOptions ({ lang, theme, mode }) {
  return createItems(lang, theme, '/docs', [
    {
      en: 'Introduction',
      zh: '介绍',
      type: 'group',
      children: [
        {
          en: 'Vue Accessible',
          zh: 'Vue Accessible',
          path: '/introduction'
        }
      ]
    },
    {
      en: 'Getting Started',
      zh: '快速上手',
      type: 'group',
      children: [
        {
          en: 'Installation',
          zh: '安装',
          path: '/installation'
        }
      ]
    },
    {
      en: 'Components',
      zh: '组件 & API',
      type: 'group',
      children: [
        {
          en: 'AccessibleBar',
          zh: '无障碍信息条',
          enSuffix: true,
          path: '/accessible-bar'
        }
      ]
    }
  ])
}

export function createDemoPageOptions ({ lang, theme, mode }) {
  return [
    ...createItems(lang, theme, '', [
      {
        en: '← Home',
        zh: '← 回到首页',
        enSuffix: false,
        path: '/'
      }
    ]),
    ...createItems(lang, theme, '/demos', [
      appendCounts({
        zh: '文本演示页面',
        en: 'Text Demo Pages',
        type: 'group',
        children: [
          {
            en: 'Page-1',
            zh: '示例页面-1',
            enSuffix: false,
            path: '/page-1'
          },
          {
            en: 'Page-2',
            zh: '示例页面-2',
            enSuffix: false,
            path: '/page-2'
          },
          {
            en: 'Page-3',
            zh: '示例页面-3',
            enSuffix: false,
            path: '/page-3'
          }
        ]
      }),
      appendCounts({
        zh: '媒体演示页面',
        en: 'Media Demo Pages',
        type: 'group',
        children: [
          {
            en: 'Page-4',
            zh: '示例页面-4',
            enSuffix: false,
            path: '/page-4'
          }
        ]
      }),
      appendCounts({
        zh: '表单/表格演示页面',
        en: 'Form/Table Demo Pages',
        type: 'group',
        children: [
          {
            en: 'Page-5',
            zh: '示例页面-5',
            enSuffix: false,
            path: '/page-5'
          },
          {
            en: 'Page-6',
            zh: '示例页面-6',
            enSuffix: false,
            path: '/page-6'
          }
        ]
      })
    ])
  ]
}
