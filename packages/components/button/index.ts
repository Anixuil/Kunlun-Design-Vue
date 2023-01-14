import { App } from 'vue'
import Button from './src/index.vue'
console.log(Button)

Button.install = function (app: App) {
    app.component(Button.name, Button)
    return app
}

export default Button
