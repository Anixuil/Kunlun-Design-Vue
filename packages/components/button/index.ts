import { App, defineComponent } from 'vue'
import Button from './src/index.vue'
console.log(Button)

Button.install = function (app: App) {
    app.component(Button.name, Button)
    return app
}
type IWithInstall = ReturnType<typeof defineComponent> & { install(app: App): void }
const _Button: IWithInstall = Button
export default _Button

// import {App,defineComponent,createApp} from 'vue';
// import Button from './src/button.vue';

// Button.install = (app:App):void => {
//     //全局注册组件
//     console.log('button组件注册全局');
//     app.component(Button.name,Button);
// }
