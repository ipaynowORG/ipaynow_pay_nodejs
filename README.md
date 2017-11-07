
# 聚合支付SDK使用说明 #

## 版本变更记录 ##


- 1.0.0 : 初稿

## 1. 概述 ##

### 1.1 简介 ###

- 聚合支付SDK。

### 1.2 如何获取 ###

[获取源码](https://github.com/ipaynowORG/ipaynow_pay_nodejs)




## 2. API ##


- 微信被扫支付

        /**
         * 微信被扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param mhtSubAppId 微信子号对应多个公众号的时候必填,如果只对应一个公众号则不传
         * @param notifyUr 后台通知地址
         * @param channelAuthCode 支付码
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function wx_scan_05(app,orderDetail,mhtSubAppId,notifyUrl,channelAuthCode,mhtOrderNo)

- 支付宝被扫支付

        /**
         * 支付宝被扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUr 后台通知地址
         * @param channelAuthCode 支付码
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function ali_scan_05(app,orderDetail,notifyUrl,channelAuthCode,mhtOrderNo)


- 手Q被扫支付

        /**
         * 手Q被扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param channelAuthCode 支付码
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.handq_scan_05 = function (app,orderDetail,notifyUrl,channelAuthCode,mhtOrderNo)


- 京东被扫支付

        /**
         * 京东被扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param channelAuthCode 支付码
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.jd_scan_05 = function (app,orderDetail,notifyUrl,channelAuthCode,mhtOrderNo)


- 银联被扫支付

        /**
         * 银联被扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param channelAuthCode 支付码
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.union_scan_05 = function (app,orderDetail,notifyUrl,channelAuthCode,mhtOrderNo)




- 微信主扫支付

        /**
         * 微信主扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param mhtSubAppId 微信子号对应多个公众号的时候必填,如果只对应一个公众号则不传
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function wx_scan_08(app,orderDetail,mhtSubAppId,notifyUrl,mhtOrderNo)


- 支付宝主扫支付

        /**
         * 支付宝主扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function ali_scan_08(app,orderDetail,notifyUrl,mhtOrderNo)


- 手q主扫支付

        /**
         * 手q主扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.handq_scan_08 = function (app,orderDetail,notifyUrl,mhtOrderNo)


- 京东主扫支付

        /**
         * 京东主扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.jd_scan_08 = function (app,orderDetail,notifyUrl,mhtOrderNo)



- 银联主扫支付

        /**
         * 银联主扫支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.union_scan_08 = function (app,orderDetail,notifyUrl,mhtOrderNo)







- 微信公众号支付

        /**
         * 微信公众号支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function wx_p_account(app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)



- 支付宝公众号支付

        /**
         * 支付宝公众号支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function ali_p_account(app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)


- 手Q公众号支付

        /**
         * 手Q公众号支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.handq_p_account = function (app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)



- 微信H5

        /**
         * 微信H5
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param consumerCreateIp 用户支付IP
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function wx_h5(app,orderDetail,consumerCreateIp,notifyUrl,frontNotifyUrl,mhtOrderNo)


- 支付宝H5

        /**
         * 支付宝H5
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function ali_h5(app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)



- 银联H5

        /**
         * 银联H5
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.unionpay_h5 = function (app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)


- 招行一网通H5

        /**
         * 招行一网通H5
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.cmbywt_h5 = function (app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)


- 手Q H5

        /**
         * 手Q H5
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param frontNotifyUrl 前台页面跳转地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.handq_h5 = function (app,orderDetail,notifyUrl,frontNotifyUrl,mhtOrderNo)



- 支付宝网页web

        /**
         * 支付宝网页web
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function ali_web(app,orderDetail,notifyUrl,mhtOrderNo) 


- 银联网页web

        /**
         * 银联网页web
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        exports.union_web = function (app,orderDetail,notifyUrl,mhtOrderNo)



- 微信小程序支付

        /**
         * 微信小程序支付
         * @param app appId(应用ID)和appKey ,
         * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param orderDetail   商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动),
         * @param consumerId  用户openId
         * @param notifyUrl 后台通知地址
         * @param mhtOrderNo 商户订单号,如果为空则自动生成商户订单号
         */
        function wx_app(app,orderDetail,consumerId,notifyUrl,mhtOrderNo)



- 商户被扫支付订单查询

        /**
        * 商户被扫支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderScan05 = function (mhtOrderNo,app)


- 商户主扫支付订单查询

        /**
        * 商户主扫支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderScan08 = function (mhtOrderNo,app)


- 商户公众号支付订单查询

        /**
        * 商户公众号支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderPaccount = function (mhtOrderNo,app) 


- 商户H5支付订单查询

        /**
        * 商户H5支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderH5 = function (mhtOrderNo,app)


- 商户网页支付订单查询

        /**
        * 商户网页支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderWeb = function (mhtOrderNo,app)


- 商户微信小程序支付订单查询

        /**
        * 商户微信小程序支付订单查询
        * @param mhtOrderNo    商户订单号
        * @param app appId(应用ID)和appKey ,
        * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
        * @return
        */
        exports.queryOrderWxApp = function (mhtOrderNo,app)



- 退款

        /**
         * 退款
         * @param appId 商户的AppId,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param appKey 商户的AppKey,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param mhtOrderNo    商户订单号
         * @param amount    退款金额
         * @param reason    退款原因
         */
        function refundOrder(mhtOrderNo,app,amount,reason)


- 退款查询

        /**
         * 退款查询
         * @param appId 商户的AppId,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param appKey 商户的AppKey,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param mhtRefundNo   商户退款单号
         */
        function refundOrder(app,mhtRefundNo) 

- 撤销

        /**
         * 撤销(只能撤销当天的交易,且无论成功失败(逻辑包含退款))
         * @param appId 商户的AppId,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param appKey 商户的AppKey,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param mhtOrderNo    商户订单号
         * @param reason    退款原因
         */
         function backOrder(app,mhtOrderNo,reason)

- 撤销查询

        /**
         * 撤销查询
         * @param appId 商户的AppId,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param appKey 商户的AppKey,https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
         * @param mhtRefundNo   商户退款单号
         */
        function backQuery(app,mhtRefundNo) 


## 3. DEMO说明 ##

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
