Page({
    data: {
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
            'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
        ],
        iconType: [
            'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
        ],
        carShopShow: false,
        carShop: [],
        totalPrice:0
    },
    onShow: function(){
        let carShopShow = false;
        let carShop = wx.getStorageSync('carShop');
        let total = 0;
        //console.log(carShop)
        if(carShop){
            carShopShow = true;
            carShop.forEach(function (item) {
                item.selected = true;
                if(item.selected){
                    total +=item.count*item.nowPrice;
                }
                //total += item.nowPrice*item.count;
            })
        }else{
            carShopShow = false;
        }
        this.setData({
            carShopShow: carShopShow,
            carShop: carShop,
            totalPrice: total
        });
    },
    totalNum: function(item,total){
        if(item.selected){
            //let total = 0;
            console.log(item)
            total += item.count*item.nowPrice;
            /*this.setData({
                totalPrice : total
            })*/
        }
        return total;
    },
    calculate: function(event){
        let that = this;
        let op = parseInt(event.target.dataset.op);
        let id = parseInt(event.target.dataset.id);
        let shop = this.data.carShop;
        let total = 0;
        if(op>0){
            shop.forEach(function(item){
                if(item.shopid == id){
                    item.count ++;
                }
                /*if(item.selected){
                    total +=item.count*item.nowPrice;
                }*/
                console.log(90)
                total = that.totalNum(item,total);
            })
        }else{
            shop.forEach(function(item){
                if(item.shopid == id){
                    if(item.count>1){
                        item.count --;
                    }else if(item.count == 1){
                        item.count = 1
                    }
                }
                total = that.totalNum(item,total);
            })
        }
        console.log(total);
        wx.removeStorage({
            key: 'carShop',
            success: function(res) {
                wx.setStorage({
                    key: "carShop",
                    data: shop
                })
            }
        })
        this.setData({
            carShop: shop,
            totalPrice: total
        });
    },
    selectShop: function(event){
        //console.log(event);
        let id = parseInt(event.currentTarget.dataset.id);
        let shoplist = this.data.carShop;
        let that = this;
        let total = 0;

        //console.log(shoplist)
        shoplist.forEach(function(item,index){
            if(item.shopid == id){
                shoplist[index].selected = !shoplist[index].selected;
            }
            total = that.totalNum(item,total);
        });
        console.log('总额'+total)
        that.setData({
            carShop: shoplist,
            totalPrice: total
        });

    }
})