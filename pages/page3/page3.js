const app = getApp()

Page({
  data: {
  
  },
 
  onLoad: function () {

  },

  next: function () {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  }
})
