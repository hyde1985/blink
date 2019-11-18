import {config} from "../config";

class HTTP {

    request(params) {
        // 如果参数中没有设置method，则默认为GET
        if(!params.method) {
            params.method = 'GET'
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                // 判断状态码，如果2xx，则。。。。。
                let code = res.statusCode
                if(code.startsWith('2')) {

                } else {

                }
            },
            fail: (err) => {

            }
        })
    }
}

export {
    HTTP
}