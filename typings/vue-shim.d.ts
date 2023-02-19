declare module '*.vue' {
    // 取defineComponent的返回值，标识组件类型
    import { defineComponent, App } from 'vue'
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void
    }
    // 导出组件类型
    export default component
}

declare module '*.json' {
    const value: any
    export default value
}

declare module 'qrcode'
