import {HTTP} from "../utils/http";

class ClassicModel extends HTTP {

    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success:(res) => {
                sCallback(res)
            }
        })
    }

    getPrevious(index, sCallback) {
        this.request({
            url: 'classic/' + index + '/previous',
            success: (res) => {
                sCallback(res)
            }
        })
    }
}

export {ClassicModel}