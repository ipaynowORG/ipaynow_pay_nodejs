

//SDK依赖
var sdk = require('./sdk');
//AppId和AppKey
var app = new sdk.App("150753082825470","8jTST7ywIBY0QQ3RlcxWEl08Xj9gaYyQ")
//商品信息: 名称,简称,价格(分),打折码
var orderDetail = new sdk.OrderDetail("哈哈哈24","mhtOrderDetail","1","")
//微信主扫
// sdk.wx_scan_05(app,orderDetail,"","https://op-tester.ipaynow.cn/paytest/notify","135403515183092925");
//订单查询
sdk.queryOrder("SIB9KLZOII86U",app,"05");
//退款
// sdk.refundOrder("7OD2FZV5BTLGU",app,1,"r");
