import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App)


app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
