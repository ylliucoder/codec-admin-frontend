interface MenuItem {
    id: string
    parentId: string
    path: string
    component: string
    redirect: string
    type: number
    title: string
    svgIcon: string
    icon: string
    keepAlive: boolean
    hidden: boolean
    sort: number
    activeMenu: string
    breadcrumb: boolean
    status: number
    roles: string[]
    permission: string
    showInTabs: boolean
    alwaysShow: boolean
    affix: boolean
    children?: MenuItem[]
}