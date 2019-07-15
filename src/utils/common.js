export function checkTel (tel) {
    // 手机或固定电话
    const mobile = /^1[0-9]{10}$/,
        phone = /^0\d{2,3}-?\d{7,8}$/;
    return mobile.test(tel) || phone.test(tel);
}

export function formatDate (date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function getDateNDayAgo (n) {
    const date = new Date();
    const time = date.getTime();
    const agoTime = time - (60 * 60 * 24 * (n || 0) * 1000);
    const agoDate = new Date(agoTime);
    const y = agoDate.getFullYear();
    const m = agoDate.getMonth() + 1;
    const d = agoDate.getDate();
    const mm = m < 10 ? '0' + m : m;
    const dd = d < 10 ? '0' + d : d;
    return y + '-' + mm + '-' + dd;
}

// 获取对象数组元素某属性Array
export function getListItemAttrArr (list, attr) {
    let arr = []
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item[attr]) {
            arr.push(item[attr])
        }
    }
    return arr;
}

// 下载文件
export function downloadFile (api, obj) {
    let url = process.env.BASE_API + api;
    let arr = [];
    let str = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];
            arr.push(key + '=' + (val || ''));
        }
    }
    str = arr.join('&');
    window.open(url + '?' + str, '_blank');
}
