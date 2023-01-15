// export * from './src/button'
// import {withInstall} from '@kunlun-design/utils'
// import Button from './src/button.vue'

// export const KlButton = withInstall(Button)

// export default KlButton
import type { App } from 'vue'
import Button from './src/button.vue'

Button.install = (app: App) => {
    app.component(Button.name, Button)
}

export { Button }
export default Button
