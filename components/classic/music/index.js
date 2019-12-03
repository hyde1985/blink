// components/classic/music/index.js
import {classBehavior} from "../classic-beh";

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classBehavior],

  properties: {
    src: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: "./images/player@play.png",
    pauseSrc: "./images/player@pause.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
