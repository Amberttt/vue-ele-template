
export default [
    // {
    //     path: '/',
    //     redirect: '/login',
    //     component: resolve => require(['@/components/login'], resolve),
    //     meta: {
    //         keepAlive: false
    //     }
    // },
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['@/components/login'], resolve),
        // meta: {
        //     keepAlive: false
        // }
    },
    // {
    //     path: '/reset',
    //     name: 'Reset',
    //     component: resolve => require(['@/components/login/reset'], resolve),
    //     meta: {
    //         keepAlive: false
    //     }
    // }
]