export default [
    {
        path: '/mine',
        name: 'Mine',
        component: resolve => require(['@/components/main/mine'],resolve),
        // meta: {
        //     keepAlive: true
        // }
    }
]