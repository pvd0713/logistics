import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/startMain.vue'
import Logistics from './components/logistics.vue'

const routes = [
  { path: '/logistics', component: Home },
  { path: '/logistics/messages', component: Logistics, props: { index: 0, block: 1 } },
  { path: '/logistics/supply', component: Logistics, props: { index: 1 } },
  { path: '/logistics/road', component: Logistics, props: { index: 2 } },
  { path: '/logistics/railway', component: Logistics, props: { index: 3 } },
  { path: '/logistics/settings', component: Logistics, props: { index: 4, block: 0 } },
  { path: '/logistics/archive', component: Logistics, props: { index: 5 } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
