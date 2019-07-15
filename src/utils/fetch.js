// 封装fetch方法
import axios from 'axios';
import {Message} from 'element-ui';
import router from '../router';
import {logout} from '../api/login';
// axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    headers: {
        'Content-Type': 'application/json'
    },
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        return JSON.stringify(data)
    }],
    timeout: 100000,
    withCredentials: true
});

// // request拦截器
// service.interceptors.request.use(config => {
//     if (store.getters.token) {
//         config.headers['X-Token'] = store.getters.token; // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config;
// }, error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
// });

var msgShowing = false;
// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200 && res.code !== 4100) {
            if (!msgShowing) {
                msgShowing = true;
                Message({
                    message: res.message || res.description,
                    type: 'error',
                    duration: 5 * 1000,
                    onClose: function () {
                        msgShowing = false;
                    }
                });
            }
            if (res.code === 300 || res.code === 550) {
                logout().then(()=> {
                    router.push({
                        path: '/login',
                        query: {
                            _t: new Date().getTime()
                        }
                    });
                });
            }
            return Promise.reject(res);
        } else {
            if(res.code == 4100){
                Message({
                    message: res.message || res.description,
                    type: 'error',
                    duration: 5 * 1000
                });
            }else{
                return res.data;
            }
        }
    },
    error => {
        Message({
            message: error.message || error.description,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;
