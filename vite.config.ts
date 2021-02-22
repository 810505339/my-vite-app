import {defineConfig} from 'vite'
//import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

declare var __dirname: string;

console.log(path.resolve(__dirname, './src'))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vueJsx()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
