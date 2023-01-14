// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库
import KunlunDesign from 'kunlun-design-vue' // 开发阶段

import 'theme-chalk/src/index.scss' // 开发阶段引入样式
// 创建应用并使用组件库
createApp(App).use(KunlunDesign).mount('#app')
