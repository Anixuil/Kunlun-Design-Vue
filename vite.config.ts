import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueMacros({
            plugins: {
                vue: vue()
            }
        })
    ],
    build: {
        outDir: 'lib',
        lib: {
            entry: resolve(__dirname, './packages/index.ts'),
            name: 'Kunlun-Design',
            fileName: 'kunlun-design-vue'
        },
        rollupOptions: {
            //确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                //在umd构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'vue'
                }
            }
        }
    }
})
