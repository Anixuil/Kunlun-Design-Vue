import type { App } from 'vue'
import * as KlIconCpns from '@kl-design/icons'
import '@kl-design/icons/style.css'

const registerIcons = (app: App) => {
    for (const [key, component] of Object.entries(KlIconCpns)) {
        app.component(key, component)
    }
}

export default registerIcons
