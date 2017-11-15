Page({
    data:{
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        imgId: 0,
        theme: '原创设计魅力夏日',
        themeList: [{
            theme: '原创设计魅力夏日',
            descript: '原创设计魅力夏日',
            productData: [
                {
                    shopid: 0,
                    imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                    name: '城市度假休闲搭配唯美裙',
                    oldPrice: 228.0,
                    nowPrice: 128.0,
                    decsript: '城市度假休闲搭配唯美裙'
                },
                {
                    shopid: 1,
                    imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                    name: '仲夏风情文艺清新仙女裙',
                    oldPrice: 198.0,
                    nowPrice: 98.0,
                    decsript: '仲夏风情文艺清新仙女裙'
                },
                {
                    shopid: 2,
                    imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                    name: '仙女裙',
                    oldPrice: 54,
                    nowPrice: 50,
                    decsript: '仲夏风情文艺清新仙女裙'
                }
            ]
        },
            {
                theme: '城市度假休闲搭配',
                descript: '原创设计魅力夏日',
                productData: [
                    {
                        shopid: 0,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '城市度假休闲搭配唯美裙',
                        oldPrice: 228.0,
                        nowPrice: 128.0,
                        decsript: '城市度假休闲搭配唯美裙'
                    },
                    {
                        shopid: 1,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '仲夏风情文艺清新仙女裙',
                        oldPrice: 198.0,
                        nowPrice: 98.0,
                        decsript: '仲夏风情文艺清新仙女裙'
                    },
                    {
                        shopid: 2,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '仙女裙',
                        oldPrice: 54,
                        nowPrice: 50,
                        decsript: '仲夏风情文艺清新仙女裙'
                    }
                ]
            },
            {
                theme: '仲夏风情文艺清新',
                descript: '原创设计魅力夏日',
                productData: [
                    {
                        shopid: 0,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '城市度假休闲搭配唯美裙',
                        oldPrice: 228.0,
                        nowPrice: 128.0,
                        decsript: '城市度假休闲搭配唯美裙'
                    },
                    {
                        shopid: 1,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '仲夏风情文艺清新仙女裙',
                        oldPrice: 198.0,
                        nowPrice: 98.0,
                        decsript: '仲夏风情文艺清新仙女裙'
                    },
                    {
                        shopid: 2,
                        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                        name: '仙女裙',
                        oldPrice: 54,
                        nowPrice: 50,
                        decsript: '仲夏风情文艺清新仙女裙'
                    }
                ]
            }],
        productData: []
    },
    onLoad: function (option) {
        let id = option.id;
        this.setData({
            imgId: id,
            productData: this.data.themeList[id].productData
        })
    }
})