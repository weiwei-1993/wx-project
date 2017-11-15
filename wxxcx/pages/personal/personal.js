const app = getApp()
Page({
    data: {
        userInfo: '',
        myList: [
            [{
                iconUrl: '../imgs/order.png',
                name: '我的订单',
                href: '/pages/order/order'
            }, {
                iconUrl: '../imgs/heart.png',
                name: '我的收藏',
                href: '/pages/order/order'
            }, {
                iconUrl: '../imgs/air.png',
                name: '收货地址管理',
                href: '/pages/order/order'
            }],
            [{
                iconUrl: '../imgs/notice.png',
                name: '用户反馈',
                href: '/pages/order/order'
            }, {
                iconUrl: '../imgs/phone.png',
                name: '关于我们',
                href: '/pages/order/order'
            }]
        ]
    },
    onLoad: function () {
        console.log(getApp())
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

    }
})