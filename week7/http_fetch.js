function http(url, options = {}) {
    let {
        method = 'get',
            data = {},
            headers = {},
            credentials = 'same-origin'
    } = options;
    let isGet = method.toLowerCase() == 'get';
    if (isGet) {
        // 如果是get请求，就需要吧data中的参数不成url后面的search字符串
        let str = '';   
        for (let k in data) {
            str += `${k}=${data[k]}&`
        }
        str = str.replace(/&$/, '');
        url = url.indexOf('?') == -1 ? url + '?' + str : url + '&' + str;
    }
    return fetch(url, {
        method: method,
        body: isGet ? null : JSON.stringify(data),
        headers,
        credentials,
    }).then((data) => {
        if (/[45]\d{2}/.test(data.status)) {
            throw Error(`${data.status}${data.statusText}`)
        }
        return data.json();
    })
}
// http.then();

http.get = function (url, data) {
    return http(url, {
        method: 'get',
        data,
    })
}

http.post = function (url, data) {
    return http(url, {
        method: 'post',
        data,
    })
}