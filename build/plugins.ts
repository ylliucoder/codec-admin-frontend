import vue from "@vitejs/plugin-vue";
import {vitePluginFakeServer} from "vite-plugin-fake-server";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {vitePluginForArco} from "@arco-plugins/vite-vue";

const getVitePluginList = (mode: string) => {
    return [
        vue(),
        vitePluginForArco({
            style: 'css'
        }),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/types/import.d.ts',
        }),
        Components({
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            dts: 'src/types/comp.d.ts',
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