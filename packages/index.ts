import { App } from 'vue'
import components from './components/component'

export * from './components/component'

const install = function (app: App) {
    components.forEach(component => {
        app.use(component as unknown as { install: () => any })
    })
}

export default {
    install
}
