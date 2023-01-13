import Button from '@kunlun-design-vue/button'
import { App } from 'vue'

const components = [Button]

const install = (app: App): void => {
  components.forEach(component => {
    //遍历组件，挂载全局
    app.component(component.name, component)
  })
}

export default {
  install
}
