/**
 * Created by Administrator on 2017/10/26.
 */

var allData = alldata();
function alldata() {
    var alldata = {
        themeList: [{
            theme: "原创设计魅力夏日",
            themeid: 123,
            themeimg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
            descript: "原创设计魅力夏日",
            productData: [
                {
                    shopid: 1425,
                    imgUrl: ["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"],
                    name: "原创-城市度假休闲搭配唯美裙",
                    oldPrice: 100.0,
                    nowPrice: 200.0,
                    decsript: "原创-城市度假休闲搭配唯美裙",
                    smallimg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
                }, {
                    shopid: 285843,
                    imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"],
                    name: "原创-仲夏风情文艺清新仙女裙",
                    oldPrice: 200.0,
                    nowPrice: 300.0,
                    decsript: "原创-仲夏风情文艺清新仙女裙",
                    smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
                },
                {
                    shopid: 308054,
                    imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],
                    name: "原创-仙女裙",
                    oldPrice: 300.0,
                    nowPrice: 400.0,
                    decsript: "原创-仙女裙",
                    smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
                }]
        },
            {
                theme: "城市度假休闲搭配",
                themeid: 456,
                themeimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
                descript: "城市度假休闲搭配",
                productData: [
                    {
                        shopid: 4945,
                        imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"],
                        name: "城市度假-城市度假休闲搭配唯美裙",
                        oldPrice: 100.0,
                        nowPrice: 200.0,
                        decsript: "城市度假-城市度假休闲搭配唯美裙",
                        smallimg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
                    }, {
                        shopid: 5927854,
                        imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"],
                        name: "城市度假-仲夏风情文艺清新仙女裙",
                        oldPrice: 200.0,
                        nowPrice: 300.0,
                        decsript: "城市度假-仲夏风情文艺清新仙女裙",
                        smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
                    },
                    {
                        shopid: 69734,
                        imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],
                        name: "城市度假-仙女裙",
                        oldPrice: 300.0,
                        nowPrice: 400.0,
                        decsript: "城市度假-仙女裙",
                        smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
                    }]
            },
            {
                theme: "一米阳光潮流服饰",
                themeid: 789,
                themeimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
                descript: "一米阳光潮流服饰",
                productData: [
                    {
                        shopid: 79574,
                        imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"],
                        name: "一米-城市度假休闲搭配唯美裙",
                        oldPrice: 100.0,
                        nowPrice: 200.0,
                        decsript: "一米-城市度假休闲搭配唯美裙",
                        smallimg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
                    }, {
                        shopid: 8836574,
                        name: "一米-仲夏风情文艺清新仙女裙",
                        oldPrice: 200.0,
                        nowPrice: 300.0,
                        decsript: "一米-仲夏风情文艺清新仙女裙",
                        smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
                    },
                    {
                        shopid: 987545,
                        imgUrl: ["http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"],
                        name: "一米-仙女裙",
                        oldPrice: 300.0,
                        nowPrice: 400.0,
                        decsript: "一米-仙女裙",
                        smallimg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
                    }]
            }]
    }
    return alldata;
}
function themeimg(allData){
    var arr = [];
    allData.themeList.forEach(function(item){
        arr.push(item.themeimg)
    })
    return arr;
}
var themeImg = themeimg(allData);
function productdata(allData){
    var obj = {};
    obj = allData.themeList[0].productData;
    return obj;
}
var productData = productdata(allData);
module.exports = {
    allData: allData,
    themeImg: themeImg,
    productData: productData
}