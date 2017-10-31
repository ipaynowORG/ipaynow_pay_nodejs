

var util = require('./util');


exports.OrderDetail = function (mhtOrderName,mhtOrderDetail,mhtOrderAmt,mhtGoodsTag){
	this.mhtOrderName = mhtOrderName;
    this.mhtOrderDetail = mhtOrderDetail;
    this.mhtOrderAmt = mhtOrderAmt;
    this.mhtGoodsTag = mhtGoodsTag;
}

exports.App = function (appId,appKey){
	this.appId=appId;
	this.appKey=appKey;
}



/**
 * 微信被扫支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param mhtSubAppId 微信子号对应多个公众号的时候必填,如果只对应一个公众号则不传
 * @param notifyUrl 后台通知地址
 * @param channelAuthCode 支付码
 */
exports.wx_scan_05 = function (app,orderDetail,mhtSubAppId,notifyUrl,channelAuthCode){
	return pay(app,orderDetail,channelAuthCode,"","","05",mhtSubAppId,"","",notifyUrl,"","13","");	
}

/**
 * 支付宝被扫支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 * @param channelAuthCode 支付码
 */
exports.ali_scan_05 = function (app,orderDetail,notifyUrl,channelAuthCode){
	return pay(app,orderDetail,channelAuthCode,"","","05","","","","",notifyUrl,"","12","");	
}


/**
 * 微信主扫支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param mhtSubAppId 微信子号对应多个公众号的时候必填,如果只对应一个公众号则不传
 * @param notifyUrl 后台通知地址
 */
exports.wx_scan_08 = function (app,orderDetail,mhtSubAppId,notifyUrl){
	//最后参数0返回图片,data:..格式 。 1 返回支付链接
	return pay(app,orderDetail,"","","","08",mhtSubAppId,"","",notifyUrl,"","13","0");	
}


/**
 * 支付宝主扫支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 * @param resultType PIC: tn为二维码图片(data:..格式)  URL : tn为支付链接
 */
exports.ali_scan_08 = function (app,orderDetail,notifyUrl){
	//最后参数0返回图片,data:..格式 。 1 返回支付链接
	return pay(app,orderDetail,"","","","08","","","",notifyUrl,"","12","0");	
}



/**
 * 微信公众号支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 * @param frontNotifyUrl 前台页面跳转地址
 */
exports.wx_p_account = function (app,orderDetail,notifyUrl,frontNotifyUrl){
	return pay(app,orderDetail,"","","","0600","","","",notifyUrl,frontNotifyUrl,"13","0");
}

/**
 * 支付宝公众号支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 * @param frontNotifyUrl 前台页面跳转地址
 */
exports.ali_p_account = function (app,orderDetail,notifyUrl,frontNotifyUrl){
	return pay(app,orderDetail,"","","","0600","","","",notifyUrl,frontNotifyUrl,"12","0");
}

/**
 * 微信H5
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param consumerCreateIp 用户支付IP
 * @param notifyUrl 后台通知地址
 * @param frontNotifyUrl 前台页面跳转地址
 */
exports.wx_h5 = function (app,orderDetail,consumerCreateIp,notifyUrl,frontNotifyUrl){
	return pay(app,orderDetail,"",consumerCreateIp,"","0601","","","",notifyUrl,frontNotifyUrl,"13","1");
}


/**
 * 支付宝H5
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 * @param frontNotifyUrl 前台页面跳转地址
 */
exports.ali_h5 = function (app,orderDetail,notifyUrl,frontNotifyUrl){
	return pay(app,orderDetail,"","","","0601","","","",notifyUrl,frontNotifyUrl,"12","1");
}


/**
 * 支付宝网页web
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail 商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动)
 * @param notifyUrl 后台通知地址
 */
exports.ali_web = function (app,orderDetail,notifyUrl){
	return pay(app,orderDetail,"","","","04","","","",notifyUrl,"","12","0");
}


/**
 * 微信小程序支付
 * @param app appId(应用ID)和appKey ,
 * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
 * @param orderDetail   商品名称,商品描述,商品价格(单位分),商品标记(用于营销活动),
 * @param consumerId  用户openId
 * @param notifyUrl 后台通知地址
 */ 
exports.wx_app = function (app,orderDetail,consumerId,notifyUrl){
	return pay(app,orderDetail,"","","","14","",consumerId,"",notifyUrl,"","13","1");
}









	/**
     * 商户支付订单查询
     * @param mhtOrderNo    商户订单号
     * @param app appId(应用ID)和appKey ,
     * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKey
     * @param deviceType    被扫05，主扫08，公众号传0600，h5传0601，网页04
     * @return
     */
exports.queryOrder = function (mhtOrderNo,app,deviceType) {
	
	var m = {};
	m['funcode'] = "MQ002";
	m['version'] = "1.0.0";
	m['deviceType'] = deviceType;
	m['appId'] = app.appId;
	m['mhtOrderNo'] = mhtOrderNo;
	m['mhtCharset'] = "UTF-8";
	m['mhtSignType'] = "MD5";

	m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));

	var content = "";
	for(k in m) {
		content += k+"=";
		content += util.url_encode(m[k])+"&"
	}
	content = content.substring(0,content.length-1);

	return post(content,"https://pay.ipaynow.cn");
}



	/**
     * 退款
     * @param app appId(应用ID)和appKey ,
     * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKeyey
     * @param mhtOrderNo    商户订单号
     * @param amount    退款金额(分)
     * @param reason    退款原因
     * @return
     */
exports.refundOrder = function (mhtOrderNo,app,amount,reason) {

	var m = {};
	m['funcode'] = "R001";
	m['appId'] = app.appId;
	m['mhtOrderNo'] = mhtOrderNo;
	m['mhtRefundNo'] = util.generateMixed(20);;
	m['amount'] = amount;
	if(reason != ""){
		m['reason'] = reason;
	}
	m['mhtCharset'] = "UTF-8";

	m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));
	m['signType'] = "MD5";

	var content = "";
	for(k in m) {
		content += k+"=";
		content += util.url_encode(m[k])+"&"
	}
	content = content.substring(0,content.length-1);

	return post(content,"https://pay.ipaynow.cn/refund/refundOrder");
}






	/**
     * 退款查询
     * @param app appId(应用ID)和appKey ,
     * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKeyey
     * @param mhtRefundNo   商户退款单号
     * @return
     */
     exports.refundOrder = function (app,mhtRefundNo) {
     	var m = {};
		m['funcode'] = "Q001";
		m['appId'] = app.appId;
		m['mhtRefundNo'] = mhtRefundNo;
		m['mhtCharset'] = "UTF-8";

		m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));
		m['signType'] = "MD5";

		var content = "";
		for(k in m) {
			content += k+"=";
			content += util.url_encode(m[k])+"&"
		}
		content = content.substring(0,content.length-1);

		return post(content,"https://pay.ipaynow.cn/refund/refundQuery");
     }




	/**
     * 撤销(只能撤销当天的交易,且无论成功失败(逻辑包含退款))
     * @param app appId(应用ID)和appKey ,
     * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKeyey
     * @param mhtOrderNo    商户订单号
     * @param reason    退款原因
     * @return
     */
     exports.backOrder = function (app,mhtOrderNo,reason) {
     	var m = {};
		m['funcode'] = "R002";
		m['appId'] = app.appId;
		m['mhtOrderNo'] = mhtOrderNo;
		m['mhtRefundNo'] = util.generateMixed(20);;
		
		if(reason != ""){
			m['reason'] = reason;
		}
		m['mhtCharset'] = "UTF-8";

		m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));
		m['signType'] = "MD5";

		var content = "";
		for(k in m) {
			content += k+"=";
			content += util.url_encode(m[k])+"&"
		}
		content = content.substring(0,content.length-1);

		return post(content,"https://pay.ipaynow.cn/refund/refundOrder");
     }

    


	/**
     * 撤销查询
     * @param app appId(应用ID)和appKey ,
     * 登录商户后台 : https://mch.ipaynow.cn ->商户中心->应用信息可以新增应用或查看appKeyey
     * @param mhtRefundNo   商户退款单号
     * @return
     */
     exports.backQuery = function (app,mhtRefundNo) {
    	var m = {};
		m['funcode'] = "Q002";
		m['appId'] = app.appId;
		m['mhtRefundNo'] = mhtRefundNo;
		m['mhtCharset'] = "UTF-8";

		m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));
		m['signType'] = "MD5";

		var content = "";
		for(k in m) {
			content += k+"=";
			content += util.url_encode(m[k])+"&"
		}
		content = content.substring(0,content.length-1);

		return post(content,"https://pay.ipaynow.cn/refund/refundQuery");
    }








function pay(app,orderDetail,channelAuthCode,consumerCreateIp,mhtSubMchId,deviceType,mhtSubAppId,consumerId,mhtReserved,notifyUrl,frontNotifyUrl,payChannelType,outputType) {
	
	var m = {};
	if(channelAuthCode != ""){
		m['channelAuthCode'] = channelAuthCode;
	}
	if(consumerCreateIp != ""){
		m['consumerCreateIp'] = consumerCreateIp;
	}
	m['funcode'] = "WP001";
	m['version'] = "1.0.0";
	m['mhtCurrencyType'] = "156";
	m['mhtOrderType'] = "01";
	m['mhtOrderTimeOut'] = "2000";
	m['mhtCharset'] = "UTF-8";
	m['mhtSignType'] = "MD5";
	var d = new Date();
	m['mhtOrderStartTime'] = d.getFullYear()+""+((d.getMonth()+1)<10?"0":"")+(d.getMonth()+1)+""+(d.getDate()<10?"0":"")+d.getDate()+""+(d.getHours()<10?"0":"")+d.getHours()+""+(d.getMinutes()<10?"0":"")+d.getMinutes()+""+(d.getSeconds()<10?"0":"")+d.getSeconds();
	m['mhtLimitPay'] = "0";
	if(outputType != ""){
		m['outputType'] = outputType;
	}
	if(mhtSubMchId != ""){
		m['mhtSubMchId'] = mhtSubMchId;
	}
	if(orderDetail.mhtGoodsTag != ""){
		m['mhtGoodsTag'] = orderDetail.mhtGoodsTag;
	}


	if(mhtSubAppId != ""){
		m['mhtSubAppId'] = mhtSubAppId;
	}
	if(consumerId != ""){
		m['consumerId'] = consumerId;
	}
	if(mhtReserved != ""){
		m['mhtReserved'] = mhtReserved;
	}
	m['appId'] = app.appId;

	m['mhtOrderNo'] = util.generateMixed(13);

	m['mhtOrderName'] = orderDetail.mhtOrderName;

	m['mhtOrderAmt'] = orderDetail.mhtOrderAmt;

	m['mhtOrderDetail'] = orderDetail.mhtOrderDetail;
	
	if(notifyUrl != ""){
		m['notifyUrl'] = notifyUrl;
	}

	if(frontNotifyUrl != ""){
		m['frontNotifyUrl'] = frontNotifyUrl;
	}

	m['deviceType'] = deviceType;

	m['payChannelType'] = payChannelType;

	m['mhtSignature'] = util.md5(util.postFormLinkReport(m)+"&"+util.md5(app.appKey));
	
	m['appKey'] = app.appKey;

	var content = "";
	for(k in m) {
		content += k+"=";
		content += util.url_encode(m[k])+"&"
	}
	content = content.substring(0,content.length-1);

	return post(content,"https://pay.ipaynow.cn/");
}







function post(content,posturl){
	var https = require('https');
	var util = require('util');
	var url = require('url');
	var querystring = require('querystring');


	var post_option = url.parse(posturl);
	post_option.method = "POST";

	post_option.headers = {
    	'Content-Type' : 'text/html',
    	'Content-Length' : content.length
	};
	
	var result = "";
	var post_req = https.request(post_option,function(res){
    	res.setEncoding('utf8');
    	res.on('data',function(chunk){
        	result += chunk;
    	});
    	res.on('end', function() {
            console.log("result="+result);
        });
    
	});
	post_req.write(content);
	post_req.end();
	return result;
}