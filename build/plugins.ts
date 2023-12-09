import vue from "@vitejs/plugin-vue";
import {vitePluginFakeServer} from "vite-plugin-fake-server";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {ArcoResolver} from "unplugin-vue-components/resolvers";

const getVitePluginList = (mode: string) => {
    return [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ArcoResolver()],
            dts: 'src/types/auto-imports.d.ts'
        }),
        Components({
            resolvers: [ArcoResolver({sideEffect: true})],
            dts: 'src/types/components.d.ts'
        }),
        mode === 'mock' ? vitePluginFakeServer({
            include: "mock",
            basename: '/api',
            enableDev: true,
            enableProd: false,
            watch: true,
            logger: true
        }) : null,
    ]
}

export default getVitePluginList