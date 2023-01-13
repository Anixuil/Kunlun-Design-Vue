import { App, defineComponent } from 'vue'
import Button from './src/button.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

type IWithInstall = ReturnType<typeof defineComponent> & {
  install(app: App): void
}

const _Button: IWithInstall = Button
export default _Button
