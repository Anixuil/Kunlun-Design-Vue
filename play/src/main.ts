import { createApp } from 'vue'
import App from './App.vue'
import KunlunDesign from 'kunlun-design' //组件统一在这里被导入
import 'kunlun-design/lib/style.css'

createApp(App).use(KunlunDesign).mount('#app')
