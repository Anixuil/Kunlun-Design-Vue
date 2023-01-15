import type { App, Plugin } from 'vue'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export function installer(components: Plugin[] = []) {
    const install = (app: App) => {
        if ((app as any)[INSTALLED_KEY]) return
        ;(app as any)[INSTALLED_KEY] = true
        components.forEach(component => app.use(component))
    }

    return {
        install
    }
}
