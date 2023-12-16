import {defineStore} from "pinia";
import {USER_STORE} from "@/store/constant";
import {RouteRecordRaw} from "vue-router";
import {mapTree} from "xe-utils";

const modules = import.meta.glob('@/pages/admin/**/*.vue');
const loadDynamicComponent = (component: string) => {
    for (let modulesKey in modules) {
        const path = modulesKey.split('/pages/admin')[1].split('.vue')[0];
        if (path === component) {
            return modules[modulesKey]
        }
    }
    return null
}

function formatDynamicRoutes(menu: MenuItem[]) {
    return mapTree(menu, item => ({
        path: item.path,
        name: item.path,
        component: loadDynamicComponent(item.component),
        meta: {
            roles: item.roles,
        }
    })) as RouteRecordRaw[]
}

const userStoreSetup = () => {
    const isLogin = ref(true)

    const initInfo = async () => {
        // const {data} = await useUserApi.getUserInfo()
    }

    const dynamicRoutes = ref<RouteRecordRaw[]>([])
    const initRoute = async () => {
        const {data} = await useUserApi.getUserRoute()
        dynamicRoutes.value = formatDynamicRoutes(data)
        console.log(toRaw(dynamicRoutes.value))
    }

    const initData = () => Promise.all([initInfo(), initRoute()])


    const isInitData = ref(false)
    const refreshInitData = (flag: boolean) => {
        isInitData.value = flag
    }

    return {
        isLogin,
        isInitData,
        dynamicRoutes,
        initData,
        refreshInitData
    }
}
export const useUserStore = defineStore(USER_STORE, userStoreSetup)