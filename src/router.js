import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './components/startMain.vue'
import Logistics from './components/logistics.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/logistics', component: Logistics },
]

const router = createRouter({
  history: createWebHashHistory() ,
  routes,
})

export default router