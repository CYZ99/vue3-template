import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from './store/index'
import '@/assets/style/style.css'
import '@purge-icons/generated'
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
