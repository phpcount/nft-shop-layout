import { createApp } from 'vue'
import '@/assets/sass/styles.scss'
import App from './App.vue'
import router from '@/router'
import { Router } from 'vue-router'

createApp(App).use(router as Router).mount('#app')
