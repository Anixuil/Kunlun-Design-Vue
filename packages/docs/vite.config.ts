import { defineConfig } from 'vite'
import vueJSx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
    plugins: [vueJSx(), DefineOptions()]
})
