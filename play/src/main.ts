import { createApp } from 'vue'
import App from './App.vue'
import KunlunDesign from 'kunlun-design'
//组件统一在这里被导入  注意引入的是kunlun-design这个打包好的包，并不是package里的components
// 所以我们要进行打包后才可以使用，要在全局使用打包命令（pnpm build），之后才可以使用
// 自己手动添加在kunlun-design没有用，必须要打包出来才可以用
import 'kunlun-design/lib/style.css'

createApp(App).use(KunlunDesign).mount('#app')
