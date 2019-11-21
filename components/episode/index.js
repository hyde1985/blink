// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer(newVal, oldVal, changedPath) {
        newVal = parseInt(newVal) < 10 ? '0' + newVal : newVal
        this.setData({
          num: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: null,
    year: null,
    num: null
  },

  attached: function() {
    // 组件生命周期函数，在组件实例进入页面节点时执行
    let date = new Date()
    // 获取当前月份， 年份
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    this.setData({
      month: month,
      year: year
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
