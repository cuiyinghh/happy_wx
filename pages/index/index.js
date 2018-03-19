const app = getApp();
const dialogData = require('./dialog.js');

Page({
  data: {
    isNext: false,
    isReLayer: false,
    loading: false, // 橙花消息的loading
    key: '1',       // dialog对象中的key，当前橙花消息的key
    chatList: [],   // 视图中所有消息的list
    opList: []      // user选项的list
  },
 
  onLoad: function () {
    this.addCHWord("1");
  },

  addCHWord: function(key) {
    //todo  100 和 101情况
    var arr = [];
    for (var i = 0; i < dialogData[key].words.length; i++) {
      var temp = {};
      var words = dialogData[key].words;
      temp.txt = words[i];
      temp.pos = 'left';
      arr.push(temp);
    }
    arr = this.data.chatList.concat(arr);
    this.setData({
      key: key,
      loading: false,
      chatList: arr,
      opList: dialogData[key].re
    });
  },

  addUserWord: function (index) {
    var arr = [];
    var key = this.data.key;
    arr.push({
      txt: dialogData[key].re[index].content,
      pos: 'right'
    });
    arr = this.data.chatList.concat(arr);
    this.setData({
      chatList: arr
    });
  },

  footClick: function() {
    this.setData({
      isReLayer: true
    });
  },

  reply: function(e) {
    var self = this;
    var index = e.currentTarget.dataset.index;
    var nextKey = dialogData[self.data.key].re[index].next;

    this.setData({
      isReLayer: false
    });
    // 把回复放到对话框中
    this.addUserWord(index);
    this.setData({
      loading: true
    });
    clearTimeout(self.timer);
    self.timer = setTimeout(function() {
      self.addCHWord(nextKey);
    }, 1000);
  },

  closeReList: function () {
    this.setData({
      isReLayer: false
    });
  },

  next: function() {
    //todo 去下一页
  }
})
