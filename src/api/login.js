import fetch from '@/utils/fetch';

// post
export function login(data) {
    return fetch({
        url: '/post',
        method: 'post',
        data
    })
}
// get
export function logout(p) {
    return fetch({
        url: `/${p}`,
        method: 'get'
    })
}