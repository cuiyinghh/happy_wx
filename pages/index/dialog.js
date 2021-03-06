module.exports = {
  "1": {
    "words": [
      "你好哇，很高兴遇见你",
      "我是橙花大王，你认识我吗？"
    ],
    "re": [
      {
        "content": "你好啊，我认识你哦",
        "next": "2"
      },
      {
        "content": "你是谁，我不认识你",
        "next": "3"
      }
    ]
  },

  "2": {
    "words": [
      "果然是记性很好又聪明的小哥哥",
      "我是松树大王的战友，也是橙花的好朋友，咱们四个经常一起战斗！哈哈哈～"
    ],
    "re": [
      {
        "content": "你就是那个笨法师啊！啊哈哈",
        "next": "5"
      },
      {
        "content": "所以，你找我有什么事儿吗",
        "next": "4"
      }
    ]
  },
  "3": {
    "words": [
      "你是鱼吗？笨！",
      "我是松树大王的战友，也是橙花的好朋友，咱们四个经常一起战斗啊！"
    ],
    "re": [
      {
        "content": "所以，你找我有什么事儿吗",
        "next": "4"
      },
      {
        "content": "你就是那个笨法师啊！啊哈哈",
        "next": "5"
      }
    ]
  },

  "4": {
    "words": [
      "是这样的",
      "橙花说今天是你的生日，她有一封信，让我转交给你",
      "她不好意思自己给你，她会害羞"
    ],
    "re": [
      {
        "content": "你骗人，她跟我才不会害羞",
        "next": "7"
      },
      {
        "content": "哎？很好奇，你快给我吧",
        "next": "8"
      }
    ]
  },

  "5": {
    "words": [
      "哼！有时候我确实是很笨，可是你是在嘲笑橙花吗？"
    ],
    "re": [
      {
        "content": "是啊，她很笨哒",
        "next": "100"
      },
      {
        "content": "橙花才不笨呢，她是可爱！",
        "next": "6"
      }
    ]
  },

  "6": {
    "words": [
      "哈哈，她听到会开心的"
    ],
    "re": [
      {
        "content": "所以，你找我有什么事儿吗",
        "next": "4"
      } 
    ]
  },

  "7": {
    "words": [
      "笨蛋",
      "女孩儿的心思你别猜",
      "面对心爱的人肯定会有害羞的时候嘛！"
    ],
    "re": [
      {
        "content": "神神秘秘的，你给我看看吧",
        "next": "8"
      }
    ]
  },

  "8": {
    "words": [
      "不行",
      "你必须回答对我所有的问题，才能看"
    ],
    "re": [
      {
        "content": "为什么要回答你的问题",
        "next": "9"
      },
      {
        "content": "好，你问吧",
        "next": "10"
      }
    ]
  },

  "9": {
    "words": [
      "因为",
      "如果你回答对了所有的问题，证明你是很爱她的"
    ],
    "re": [
      {
        "content": "你问吧，橙花大王",
        "next": "10"
      },
      {
        "content": "要你管，我就不回答",
        "next": "100"
      }
    ]
  },

  "10": {
    "words": [
      "第一个问题",
      "你是哪一天遇到橙花的？"
    ],
    "re": [
      {
        "content": "2016/12/4",
        "next": "11"
      },
      {
        "content": "2016/12/5",
        "next": "100"
      },
      {
        "content": "2017/12/5",
        "next": "100"
      }
    ]
  },

  "11": {
    "words": [
      "第二个问题",
      "你们是在哪里第一次牵手的？"
    ],
    "re": [
      {
        "content": "天通苑",
        "next": "100"
      },
      {
        "content": "香山",
        "next": "12"
      },
      {
        "content": "地铁",
        "next": "100"
      }
    ]
  },

  "12": {
    "words": [
      "第三个问题",
      "你第一次遇到她时，她戴的什么颜色的围巾"
    ],
    "re": [
      {
        "content": "白色",
        "next": "13"
      },
      {
        "content": "粉色",
        "next": "100"
      },
      {
        "content": "红色",
        "next": "100"
      }
    ]
  },

  "13": {
    "words": [
      "不错哦，你都记得呢",      
      "第四个问题",
      "她喜欢哪个你们的小家"
    ],
    "re": [
      {
        "content": "天通苑的",
        "next": "100"
      },
      {
        "content": "现在的",
        "next": "100"
      },
      {
        "content": "她都喜欢",
        "next": "14"
      }
    ]
  },

  "14": {
    "words": [
      "好了，最后一个问题",
      "一定要说实话",
      "那就是",
      "你爱她吗"
    ],
    "re": [
      {
        "content": "爱",
        "next": "15"
      },
      {
        "content": "不知道",
        "next": "100"
      },
      {
        "content": "不爱",
        "next": "100"
      }
    ]
  },

  "15": {
    "words": [
      "好了",
      "我无话可说了"
    ],
    "re": [
      {
        "content": "我的信呢？",
        "next": "101"
      }
    ]
  },

  "100": {
    "words": ["恭喜你，橙花大王离开了，并把你拉黑，你的此次旅途到此结束"],
    "re": []
  },

  "101": {
    "words": ["给你吧，你们一定会幸福的！"],
    "re": []
  }

};