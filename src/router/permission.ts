import type {Router} from "vue-router";
import {useUserStore} from "@/store/module/userStore.ts";

export const addRouterGuard = (router: Router) => {

    // const whiteList = ['/auth/login', '/auth/register']

    router.beforeEach(async (to) => {
        const userStore = useUserStore()

        if (userStore.isLogin) {
            if (to.path === '/auth/login' || to.path === '/auth/register') {
                return {path: '/'}
            } else {
                if (userStore.isInitData) return true
                else {
                    await userStore.initData()
                    userStore.dynamicRoutes.forEach(route => router.addRoute("admin", route))
                    userStore.refreshInitData(true)
                    return {...to, replace: true}
                }
            }
        } else {
            // if (whiteList.indexOf(to.path) !== -1) return true
            // else return {path: '/auth/login'}
        }
    })
}