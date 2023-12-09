import {defineConfig} from 'vite'
import {fileURLToPath} from "node:url";
import getVitePluginList from "./build/plugins.ts";
import {URL} from "url";

export default defineConfig(({mode}) => ({
    plugins: getVitePluginList(mode),
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: mode === 'dev' ? {
        proxy: {
            '/api': {
                target: 'http://localhost:9999',
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    } : {},
    envDir: 'env'
}))



