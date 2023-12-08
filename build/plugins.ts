import vue from "@vitejs/plugin-vue";
import {vitePluginFakeServer} from "vite-plugin-fake-server";

const getVitePluginList = (mode: string) => {
    return [vue(), mode === 'mock' ? vitePluginFakeServer({
        include: "mock",
        basename: '/api',
        enableDev: true,
        enableProd: false,
        watch: true,
        logger: true
    }) : null]
}

export default getVitePluginList