
// import { createPinia } from 'pinia';
import { createApp } from 'vue'
import './style.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import App from './App.vue'

const app = createApp(App)
// app.use(createPinia())
app.mount('#app');