export default [
    {
        path: '*',
        redirect: '/login',
        component: resolve => require(['@/components/login'], resolve),
        // meta: {
        //     keepAlive: false
        // }
    }
]
  
  
  