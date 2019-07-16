import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/components/main'
// import Login from '@/components/login'
// import Mine from '@/components/main/Mine';
import login from './login';
import main from './main';
import notFound from './notFound';

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // routes: [
    //     {
    //         path: '/',
    //         name: 'Main',
    //         component: Main,
    //         children: [
    //             {
    //                 path: '/mine',
    //                 name: 'Mine',
    //                 component: Mine
    //             }
    //         ]
    //     },
    //     {
    //         path: '/login',
    //         name: 'Login',
    //         component: Login
    //     }
    // ]
    routes: [
        ...login,
        ...main,
        ...notFound
    ]
})
