const data = require("../../data.js");

Page({
    data: {
        shoplist: [{
            shopid: 0,
            imgUrl: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
            name: '城市度假休闲搭配唯美裙',
            oldPrice: 228.0,
            nowPrice: 128.0,
            decsript: '城市度假休闲搭配唯美裙',
            decsriptDetail:'城市度假休闲搭配唯美裙'
        },{
            shopid: 1,
            imgUrl: ['http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'],
            name: '仲夏风情文艺清新仙女裙',
            oldPrice: 228.0,
            nowPrice: 128.0,
            decsript: '仲夏风情文艺清新仙女裙',
            decsriptDetail:'仲夏风情文艺清新仙女裙'
        },{
            shopid: 2,
            imgUrl: ['http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
            name: '仙女裙',
            oldPrice: 228.0,
            nowPrice: 128.0,
            decsript: '仙女裙',
            decsriptDetail:'仙女裙'
        }],
        bannerData: {},
        urlShow: false,
        shopid:0,
        carShopShow: false,
        shop: {}
    },
    onLoad: function(option){
        let shopid = parseInt(option.shopid);
        let themeid = parseInt(option.themeid);
        let carShop = wx.getStorageSync('carShop');
        let carShopList = [];
        let shop = [];
        let img = [];
        let that = this;
        data.allData.themeList.forEach(function(item){
            if(item.themeid == themeid){
                item.productData.forEach(function(i){
                    if(i.shopid == shopid){
                        shop = i;
                        img = i.imgUrl;
                        if(carShop){
                            carShopList = carShop;
                            carShopList.forEach(function(item){
                                if(item.shopid === shopid){
                                    shop.count = item.count;
                                }else{
                                    shop.count = 0;
                                }
                            })
                        }
                    }
                })
            }
        })

        this.setData({
            bannerData: {
                imgUrls: img,
                indicatorDots: true,
                autoplay: true,
                interval: 3000,
                duration: 300,
                circular: true
            },
            shop: shop,
            shopid: shopid
        });




    },
    //加入购物车
    addCar: function(){
        //wx.clearStorageSync();
        let carShop = wx.getStorageSync('carShop');
        let shop = this.data.shop;
        let carShopList = [];
        if(carShop){
            let that = this;
            carShopList = carShop;
            carShopList.forEach(function(item,index){
                let id = item.shopid;
                if(item.shopid == that.data.shopid){
                    shop.count ++;
                    carShopList.splice(index,1)
                }else{
                    shop.count = 1;
                }
            })
        }else{
            shop.count = 1;
            //carShopList.push(shop);
        }
        carShopList.push(shop);
        wx.removeStorage({
            key: 'carShop',
            success: function(res) {
                wx.setStorage({
                    key: "carShop",
                    data: carShopList
                })
            }
        })
        this.setData({
            shop: shop
        });
    }
})