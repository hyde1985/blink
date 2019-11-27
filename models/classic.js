import {HTTP} from "../utils/http";

class ClassicModel extends HTTP {

    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success:(res) => {
                sCallback(res)
                // 将最新一期的期刊号设置到缓存中
                this._setLastIndex(res.index)
                wx.setStorageSync(this._getStorageIndex(res.index), res)
            }
        })
    }

    getClassic(index, nextOrPrevious, sCallback) {
        let suffix = ''
        let storageIndex = ''
        if(nextOrPrevious == 'previous') {
            suffix = '/previous'
            storageIndex = this._getStorageIndex(index - 1)
        } else {
            suffix = '/next'
            storageIndex = this._getStorageIndex(index + 1)
        }
        let classic = wx.getStorageSync(storageIndex)
        if(classic) {
            sCallback(classic)
        } else {
            this.request({
                url: 'classic/' + index + suffix,
                success: (res) => {
                    sCallback(res)
                    wx.setStorageSync(this._getStorageIndex(res.index), res)
                }
            })
        }
    }

    isFirst(index) {
        // 最后一期只要判断index是否为1
        return index == 1 ? true : false
    }

    isLast(index) {
        return index == this._getLastIndex() ? true : false
    }

    _setLastIndex(index) {
        // 将最新一期期刊加入缓存
        wx.setStorageSync('lastIndex', index);
    }

    _getLastIndex() {
        // 从缓存中取出最后一期期刊号
        let lastIndex = wx.getStorageSync('lastIndex')
        return lastIndex
    }

    _getStorageIndex(index) {
        return "classic-" + index
    }

}

export {ClassicModel}