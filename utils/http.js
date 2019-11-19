import {config} from "../config";

const tips = {
    1: '服务器错误',
    1000: '输入参数错误',
    1001: '输入的json格式错误' ,
    1002: '找不到资源',
    1003: '未知错误',
    1004: '禁止访问',
    1005: '错误开发者key',
    1006: '服务器内部错误',
    400: '请求包含不支持的参数',
    401: '未授权',
    403: '被禁止访问',
    404: '请求的资源不存在',
    413: '上传文件的体积太大',
    500: '内部错误'
}

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
                let code = res.statusCode.toString()
                if(code.startsWith('2')) {
                    params.success(res.data)
                } else {
                    this._show_error(res.data.error_code)
                }
            },
            fail: (err) => {
                this._show_error(1)
            }
        })
    }

    _show_error(error_code) {
        //如果error_code为空，默认=1
        if(!error_code) {
            error_code = 1
        } else {
            wx.showToast({
                title: tips[error_code],
                icon: none,
                duration: 2000
            })
        }
    }
}

export {HTTP}