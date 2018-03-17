const app = getApp()

Page({
  data: {
  
  },
 
  onLoad: function () {

  },

  next: function() {
    wx.redirectTo({
      url: '/pages/page2/page2'
    })
  }
})
