


var sdk = require('./sdk');

var app = new sdk.App("150753082825470","8jTST7ywIBY0QQ3RlcxWEl08Xj9gaYyQ")
var orderDetail = new sdk.OrderDetail("哈哈哈24","mhtOrderDetail","1","")

// sdk.wx_scan_05(app,orderDetail,"","https://op-tester.ipaynow.cn/paytest/notify","135403515183092925");

sdk.queryOrder("SIB9KLZOII86U",app,"05");

// sdk.refundOrder("7OD2FZV5BTLGU",app,1,"r");
