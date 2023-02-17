import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'kunlun-design/lib/style.css'
import { registerIcons } from '@kunlun-design/utils'
// createApp(App).use(KunlunDesign).mount('#app')
const app = createApp(App)

// 注册所有图标
registerIcons(app)
app.use(router).mount('#app')
