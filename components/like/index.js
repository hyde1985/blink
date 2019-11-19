// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: './images/like.png',
    noSrc: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      // 获取like和count的值
      let like = this.properties.like
      let count = this.properties.count
      // 如果like为真，点击之后则为假，所以此时count - 1
      count = like ? count - 1 : count + 1
      // 数据绑定
      this.setData({
        like: !like,
        count: count
      })
      let behavior = this.properties.like ? "like" : "cancel"
      this.triggerEvent("like", {
        behavior: behavior
      }, {})
    }
  }
})
