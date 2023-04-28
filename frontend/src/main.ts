import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import App from './App.vue'
import Icon from "@/components/atoms/Icon.vue"; 

const app = createApp(App).component("Icon", Icon);

// app.use(router)
app.mount('#app')