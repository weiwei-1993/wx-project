Page({
  data: {
    title: ['未付款','未发货','已发货','全部订单'],
    tabnum: 0,
    orderList: [{
      order: 'E1957939779',
      status: 1,
      freight: 10,
      totalPrice: 200,
      shopList: [{
        name: '仲夏风情文艺清新仙女裙',
        price: 100,
        num: 2
      }]
    },{
      order: 'E1957939779',
      status: 1,
      freight: 5,
      totalPrice: 100,
      shopList: [{
        name: '清新仙女裙',
        price: 100,
        num: 1
      }]
    }]
  },
  order: function(event){
    // console.log(event)
    let index = event.target.dataset.index;
    this.setData({
      tabnum: index
    })
  }
})