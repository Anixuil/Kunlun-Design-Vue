// const path = require('path')
// const fs = require('fs')
const { resolve } = require('path')

// 使用vite打包
const { build, defineConfig } = require('vite')

// 用到的插件
const vue = require('@vitejs/plugin-vue')
const dts = require('vite-plugin-dts')
const DefineOptions = require('unplugin-vue-define-options/vite')

// 根目录
// const rootDir = resolve(__dirname, '../')

// 打包后的目录
// const outDir = resolve('lib')

const baseConfig = defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        dts({
            include: ['packages/kunlun-design', 'packages/components'],
            outputDir: resolve(__dirname, '../packages/kunlun-design/lib/types')
        })
    ],
    build: {
        outDir: resolve(__dirname, '../packages/kunlun-design/lib'),
        lib: {
            entry: resolve(__dirname, '../packages/kunlun-design/index.ts'),
            name: 'kunlun-design',
            // fileName: 'kunlun-design-vue'
            fileName: format => `index.${format}.ts`
        },
        rollupOptions: {
            //确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                //在umd构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})

main()

async function main() {
    // build
    await build(baseConfig)

    // await copyFiles()
}

// async function copyFiles() {
//   fs.copyFileSync(
//     // resolve('README.md'),
//     // resolve('packages/vangle/README.md')
//   )
// }

// function resolve(...urlOrUrls) {
//     return resolve(rootDir, ...urlOrUrls)
// }
