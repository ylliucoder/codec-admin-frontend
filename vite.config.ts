import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from "node:url";
import {vitePluginFakeServer} from "vite-plugin-fake-server";

export default defineConfig({
    plugins: [vue(), vitePluginFakeServer({
        include: "mock",
        basename: '/api',
        enableDev: true,
        enableProd: false,
        watch: true,
        logger: true
    })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
