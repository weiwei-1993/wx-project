//index.js
//获取应用实例
const app = getApp()
const data = require("../../data.js");
Page({
    data: {
        bannerData: {},
        urlShow: true,
        orderbyText: [
            "新品",
            "人气",
            "销量"
        ],
        productData: [],
        productData2: [],
        productData3: [],
        orderbyNum: 0,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isShow: false,
        alldata:{}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    orderbyTab: function (event) {
        console.log(event.target.dataset.id);
        this.setData({
            orderbyNum: event.target.dataset.id
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
            console.log(1)
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
                console.log(2)
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
            console.log(3)
        }
        this.setData({
            bannerData: {
                imgUrls: data.themeImg,
                indicatorDots: true,
                autoplay: true,
                interval: 5000,
                duration: 1000
            },
            productData:data.allData.themeList[0],
            productData2:data.allData.themeList[1],
            productData3:data.allData.themeList[2],
            alldata:data.allData
        })
    },
    getUserInfo: function (e) {
        console.log(4)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
