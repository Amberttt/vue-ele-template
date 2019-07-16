import a from './a';
import b from './b';
import c from './c';
import mine from './mine';
import setting from './setting';

export default [{
    path: '/',
    redirect: '/A',
    component: resolve => require(['@/components/main'], resolve),
    // meta: {
    //     keepAlive: false
    // },
    children: [
        ...a,
        ...b,
        ...c,
        ...mine,
        ...setting
    ]
}]