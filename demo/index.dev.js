import { createApp } from 'vue'
import naive from 'naive-ui'
import accessible from '../src/index'
import { installDemoComponents } from './setup'
import SiteRoot from './SiteRoot.vue'
import { routes } from './routes/routes'
import createDemoRouter from './routes/router'

const app = createApp(SiteRoot)

const router = createDemoRouter(app, routes)

app.use(router)
app.use(naive)
app.use(accessible)
installDemoComponents(app)

router.isReady().then(() => {
  app.mount('#app')
})
