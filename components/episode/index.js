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
          _index: newVal
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
    _index: null,
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  attached: function() {
    // 组件生命周期函数，在组件实例进入页面节点时执行
    let date = new Date()
    // 获取当前月份， 年份
    let month = date.getMonth()
    let year = date.getFullYear()
    this.setData({
      month: this.data.months[month],
      year: year
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
