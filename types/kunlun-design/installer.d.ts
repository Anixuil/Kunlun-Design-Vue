import type { App, Plugin } from 'vue'
export declare function installer(components?: Plugin[]): {
    install: (app: App) => void
}
