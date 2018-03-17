const app = getApp()

Page({
  data: {
  
  },
 
  onLoad: function () {

  },

  go: function() {
    wx.redirectTo({
      url: '/pages/letter/letter'
    })
  }
})
