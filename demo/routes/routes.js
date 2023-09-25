export const enDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/enUS/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/enUS/index.md')
  },
  // components
  {
    path: 'accessible-bar',
    component: () =>
      import('../../src/AccessibleBar/demos/enUS/index.demo-entry.md')
  }
]

export const zhDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/zhCN/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/zhCN/index.md')
  },
  // components
  {
    path: 'accessible-bar',
    component: () =>
      import('../../src/AccessibleBar/demos/zhCN/index.demo-entry.md')
  }
]

export const enDemoPagesRoutes = [
  {
    path: 'page-1',
    component: () =>
      import('../../src/AccessibleBar/demos/zhCN/index.demo-entry.md')
  }
]

export const zhDemoPagesRoutes = [
  {
    path: 'page-1',
    component: () => import('../pages/demos/page1.vue')
  }
]

export const routes = [
  {
    name: 'root',
    path: '/',
    redirect: {
      name: 'home',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme'
      }
    }
  },
  {
    name: 'home',
    path: '/:lang/:theme',
    component: () => import('../pages/home/index.vue')
  },
  {
    name: 'enDocs',
    path: '/en-US/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: enDocRoutes
  },
  {
    name: 'zhDocs',
    path: '/zh-CN/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: zhDocRoutes
  },
  {
    name: 'enDemoPages',
    path: '/en-US/:theme/demos',
    component: () => import('../pages/DemoLayout.vue'),
    children: enDemoPagesRoutes
  },
  {
    name: 'zhDemoPages',
    path: '/zh-CN/:theme/demos',
    component: () => import('../pages/DemoLayout.vue'),
    children: zhDemoPagesRoutes
  },
  {
    name: '404',
    path: '/:lang/:theme/404',
    component: () => import('../pages/home/404.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme'
      }
    }
  }
]
