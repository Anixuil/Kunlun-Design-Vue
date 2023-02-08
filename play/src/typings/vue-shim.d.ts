// 直接引入.vue文件 TS会找不到对应的类型声明；
// 所以需要新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件。
// TypeScriptTS默认只认ES 模块。如果你要导入.vue文件就要declare module把他们声明出来。
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
}
