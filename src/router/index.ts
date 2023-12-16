import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import {addRouterGuard} from "@/router/permission.ts";
import AuthLayout from "@/layouts/auth/AuthLayout.vue";
import AdminLayout from '@/layouts/admin/AdminLayout.vue'

const authLoginPage = () => import('@/pages/auth/login/login.vue')

const authLayoutRoutes: RouteRecordRaw[] = [
    {
        path: '/auth/login',
        name: 'login',
        component: authLoginPage
    }
]
export const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthLayout,
        children: authLayoutRoutes
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminLayout,
        children: []
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes
})

addRouterGuard(router)

export default router