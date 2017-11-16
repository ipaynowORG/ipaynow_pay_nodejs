

//SDK依赖
var sdk = require('./sdk');
//AppId和AppKey
var app = new sdk.App("xxxxxxxxxxx","xxxxxxxxxxxxxx")
//商品信息: 名称,简称,价格(分),打折码
var orderDetail = new sdk.OrderDetail("测试商品","mhtOrderDetail","1","")
//微信主扫
// sdk.wx_scan_05(app,orderDetail,"","https://op-tester.ipaynow.cn/paytest/notify","135536078696638618","");
//订单查询
// sdk.queryOrderScan05("PNELD5R4QL969",app,"05");
//退款
sdk.refundOrder("PNELD5R4QL969",app,1,"r");
