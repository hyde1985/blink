import {HTTP} from "../utils/http";
import {config} from "../config";

class LikeModel extends HTTP {
    like(behavior, art_id, category) {
        // 判断是点赞还是取消点赞
        let url = ''
        if(behavior == 'like') {
            url = 'like'
        } else {
            url = 'like/cancel'
        }
        // 发送请求
        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: art_id,
                type: category
            }
        })
    }
}

export {LikeModel}