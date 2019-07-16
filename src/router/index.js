import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login'
import Mine from '@/components/main/Mine';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/mine',
                    name: 'Mine',
                    component: Mine
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
