// pages/classic/classic.js
import {HTTP} from "../../utils/http";
import {ClassicModel} from "../../models/classic";
import {LikeModel} from "../../models/like";

let http = new HTTP()
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    temp: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
        this.setData({
            classic: res
        })
    })
  },

  onLike: function(event) {
    let behavior = event.detail.behavior
    let art_id = this.data.classic.id
    let category = this.data.classic.type
    likeModel.like(behavior, art_id, category)
  },

  "onNext": function(event) {
    this._updateClassic('next')
  },

  "onPrevious": function(event) {
    this._updateClassic('previous')
  },

  _updateClassic(nextOrPrevious) {
    let index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this.setData({
        classic: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLast(res.index)
      })
    })
  }
})