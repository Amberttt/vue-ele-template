export default [
    {
        path: '/setting',
        name: 'Setting',
        // redirect: '/setting-a',
        component: resolve => require(['@/components/main/Setting'], resolve),
        // meta: {
        //     keepAlive: false
        // }
        // children: [
        //     {
        //         path: '/setting-a',
        //         name: 'SettingA',
        //         component: resolve => require(['@/components/main/Setting/SettingA'], resolve)
        //     },
        //     {
        //         path: '/setting-b',
        //         name: 'SettingB',
        //         component: resolve => require(['@/components/main/Setting/SettingB'], resolve)
        //     },
        //     {
        //         path: '/setting-c',
        //         name: 'SettingC',
        //         component: resolve => require(['@/components/main/Setting/SettingC'], resolve)
        //     }
        // ]
    },
    {
        path: '/setting-a',
        name: 'SettingA',
        component: resolve => require(['@/components/main/Setting/SettingA'], resolve)
    },
    {
        path: '/setting-b',
        name: 'SettingB',
        component: resolve => require(['@/components/main/Setting/SettingB'], resolve)
    },
    {
        path: '/setting-c',
        name: 'SettingC',
        component: resolve => require(['@/components/main/Setting/SettingC'], resolve)
    }
]