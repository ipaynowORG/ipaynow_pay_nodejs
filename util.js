
exports.url_encode = function (url){
    url = encodeURIComponent(url);
    url = url.replace(/\%3A/g, ":");
    url = url.replace(/\%2F/g, "/");
    url = url.replace(/\%3F/g, "?");
    url = url.replace(/\%3D/g, "=");
    url = url.replace(/\%26/g, "&");
    
    return url;
}

exports.generateMixed = function (n) {
	var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     var res = "";
     for(var i = 0; i < n ; i ++) {
         // var id = Math.ceil(Math.random()*35);
         res += chars[Math.ceil(Math.random()*35)];
     }
     return res;
}



exports.md5 = function (text) {
	var crypto = require('crypto');
  	return crypto.createHash('md5').update(text).digest('hex');
};

exports.postFormLinkReport = function (m){
	var result = "";
	var k_array = new Array();
	for(k in m) {
		k_array.push(k);
	}
	k_array.sort();
	var post
	for(var i=0;i<k_array.length;i++){
 		
 		result += k_array[i] + "=" + m[k_array[i]] + "&";
	}
	return result.substring(0,result.length-1);
}

