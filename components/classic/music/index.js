// components/classic/music/index.js
import {classBehavior} from "../classic-beh";

const musicMgr = wx.getBackgroundAudioManager()



Component({
  /**
   * 组件的属性列表
   */
  attached: function() {
    this._recoverStatus()
    this._monitorStatus()
  },

  behaviors: [classBehavior],

  properties: {
    src: {
      type: String
    },
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: "./images/player@play.png",
    pauseSrc: "./images/player@pause.png",
    isPlaying: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function (event) {
      if(this.data.isPlaying) {
        this.setData({
          isPlaying: false
        })
        musicMgr.pause()
      } else {
          this.setData({
            isPlaying: true
          })
        musicMgr.title = this.properties.title
        musicMgr.src = this.properties.src
      }
    },

    _recoverStatus: function() {
      if (musicMgr.paused) {
        this.setData({
          isPlaying: false
        })
      } else if (musicMgr.src == this.properties.src){
        this.setData({
          isPlaying: true
        })
      }
    },

    _monitorStatus: function() {
      musicMgr.onPause(() => {
        this._recoverStatus()
      })
      musicMgr.onPlay(() => {
        this._recoverStatus()
      })
      musicMgr.onStop(() => {
        this._recoverStatus()
      })
      musicMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  },
})
