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
    likeStatus: null,
    likeCount: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
        this.setData({
            classic: res,
            likeCount: res.fav_nums,
            likeStatus: res.like_status
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
    this._getLikeStatus(this.data.classic.id, this.data.classic.type)
  },

  _getLikeStatus(art_id, category) {
      likeModel.getClassicLikeStatus(art_id, category, (res) => {
          this.setData({
            likeCount: res.fav_nums,
            likeStatus: res.like_status
          })
      })
  }
})