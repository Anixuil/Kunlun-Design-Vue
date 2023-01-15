export * from './src/button'
import { withInstall } from '@kunlun-design/utils'
import Button from './src/button.vue'

export const KlButton = withInstall(Button)

export default KlButton
// import type { App } from 'vue'
// import KlButton from './src/button.vue'

// KlButton.install = (app: App) => {
//     app.component(KlButton.name, KlButton)
// }

// export { KlButton }
// export default KlButton
