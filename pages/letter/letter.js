const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.loop = true
innerAudioContext.src = '/pages/letter/mp3/happy.mp3'

Page({
  data: {
  
  },
 
  onLoad: function () {
    // innerAudioContext.play();
  },
})
