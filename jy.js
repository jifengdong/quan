/*
简影 Unlock By @Sfly
关于Sfly:https://www.wpfphp.top
app下载地址:AppStore 简影

注意⚠️:仅供学习交流，切勿用作商业用途
[rewrite_local]
Surge4：
http-response http:\/\/api\.jianmovie\.com(\/productinfo|\/cardinfo|\/expense) requires-body=1,max-size=0,script-path=jy.js

QX：
^http:\/\/api\.jianmovie\.com(\/productinfo|\/cardinfo|\/expense) url script-response-body jy.js

MITM = api.jianmovie.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const pro = '/productinfo';
const vip = '/cardinfo';
const pri = '/expense';

if (url.indexOf(pro) != -1) {
    obj.vip = 0;
    obj.price = 0;
    body = JSON.stringify(obj);
} 
if (url.indexOf(vip) != -1) {
    obj.is_vip = 1;
    obj.vip_type = 2;
    obj.vip_expire_time = 1999999999;
    obj.nickname = "Sfly";
    obj.mobile = "18888888888";
    body = JSON.stringify(obj);
} 
if (url.indexOf(pri) != -1) {
    obj.success = 1;
    body = JSON.stringify(obj);
}
$done({body});
