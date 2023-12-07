import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

const constantRoutes: RouteRecordRaw[] = []

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router