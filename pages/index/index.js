// index.js
// 获取应用实例
const app = getApp()

Page({
 data:{
  special: [{img:"/assets/images/index_ddyy.png",title:"定点医院"},{img:"/assets/images/index_lcyd.png",title:"零售药店"},{img:"/assets/images/idnex_jbjg.png",title:"经办机构"},{img:"/assets/images/index_ypml.png",title:"药品目录"}],
  local:[{img:"/assets/images/index_1.png",title:"门慢特殊慢\n性病备案"},{img:"/assets/images/index_2.png",title:"医保账号查询"},{img:"/assets/images/index_3.png",title:"医保缴费\n信息查询"},{img:"/assets/images/index_4.png",title:"医保个人\n帐户共济"}],
  another:[{img:"/assets/images/index_5.png",title:"异地就\n医备案"},{img:"/assets/images/index_6.png",title:"异地转诊\n(转院)备案"},{img:"/assets/images/index_7.png",title:"异地定点\n医疗机构"},{img:"/assets/images/index_8.png",title:"异地就医\n结算记录"}],
  selected: 0,
  newsItem:["通知公告","医保动态","要问速递","政策法规"],

 },

/**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //右上角分享功能
  onShareAppMessage: function (res) {
  var that = this;
  return {
      title: '南宁市医保',
      //右上角分享功能
      onShareAppMessage: function (res) {
          var that = this;
          return {
              title: '南宁市医保',
              //path: '/pages/main-page/main-page?id=' + that.data.scratchId,
              success: function (res) {
                  // 转发成功
                  wx.showToast({
                      title: '转发成功！',
                  })
                  that.shareClick();
              },
              fail: function (res) {
                  // 转发失败
                  wx.showToast({
                      icon: 'none',
                      title: '转发失败',
                  })
              }
          }
      }
  }
},
selected: function (e) {
    console.log(e)
    let that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
    } else {
      that.setData({
        selected: 3
      })
    }
  },

/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /** 
     * 获取系统信息,系统宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
},

})


