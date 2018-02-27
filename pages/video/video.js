Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo');
    console.dir(this.videoContext);
    this.videoContext.requestFullScreen();
  },
  inputValue: '',
  data: {
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    isShowLayer: false

  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {  //视频下载
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindEnd: function () {
    console.log("视频播放完了");
    // this.setData({
    //   isShowLayer: true
    // });
    this.videoContext.exitFullScreen();
    
    wx.showModal({
      title: 'test',
      content: 'test',
    })
  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  }
})