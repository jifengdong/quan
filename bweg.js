/*
[rewrite_local]
Surge4：
http-response 抓取的地址 requires-body=1,max-size=0,script-path=该文件的名称.js

QX：
^https?:\/\/iface\.beva\.com\/(order\/device\/vip) url script-response-body bweg.js

MITM = iface.beva.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/order/device/vip';


if (url.indexOf(vip) != -1) {
    obj.data["is_vip"] = "Y";
    obj.data["end_time_fmt"] = "2099-12-12";
    body = JSON.stringify(obj);
}

$done({body});
