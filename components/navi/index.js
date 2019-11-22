// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题
    title: {
      type: String
    },
    // 是否是最新的一条，如果是的话，左箭头图片显示dis那张
    latest: {
      type: Boolean,
    },
    // 是否是第一条，如果是的话，右箭头图片显示dis那张
    first: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: "./images/triangle.dis@left.png",
    disRightSrc: "./images/triangle.dis@right.png",
    leftSrc: "./images/triangle@left.png",
    rightSrc: "./images/triangle@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
