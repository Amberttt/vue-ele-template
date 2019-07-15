import fetch from '@/utils/fetch';

// post
export function postData(data) {
    return fetch({
        url: '/post',
        method: 'post',
        data
    })
}
// get
export function getData(p) {
    return fetch({
        url: `/${p}`,
        method: 'get'
    })
}