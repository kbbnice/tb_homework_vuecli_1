let shopRouter = [
    {
        path: '/seat/add',
        component: () =>import('@/views/seat/Add.vue')
    },
    {
        path: '/seat/detail',
        component: () =>import('@/views/seat/Detail.vue')
    },
    {
        path: '/seat/list',
        component: () =>import('@/views/seat/List.vue')
    },
    {
        path: '/center/info',
        component: () =>import('@/views/center/Info.vue')
    },
]

export {
    shopRouter
}