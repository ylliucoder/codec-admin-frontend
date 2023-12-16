import vue from "@vitejs/plugin-vue";
import {vitePluginFakeServer} from "vite-plugin-fake-server";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {vitePluginForArco} from "@arco-plugins/vite-vue";
import {loadEnv} from "vite";

const getVitePluginList = (mode: string) => {
    const env = loadEnv(mode, 'env')
    return [
        vue(),
        vitePluginForArco({
            style: 'css'
        }),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dirs: [
                'src/apis',
                'src/store/module'
            ],
            dts: 'src/types/import.d.ts',
        }),
        Components({
            dirs: [
                'src/components',
                'src/layouts'
            ],
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            dts: 'src/types/comp.d.ts',
        }),
        mode === 'mock' ? vitePluginFakeServer({
            include: "mock",
            basename: env.VITE_API_BASE_URL,
            enableDev: true,
            enableProd: false,
            watch: true,
            logger: true
        }) : null,
    ]
}

export default getVitePluginList