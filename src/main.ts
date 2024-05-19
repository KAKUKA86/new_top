import {createApp} from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import router from './router/router.ts'
import App from './App.vue'
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
