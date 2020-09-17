/*QX：
^https:\/\/app-zh\.babybus\.com\/super_class_v2 url script-response-body bbb.js

MITM = https://app-zh.babybus.com/super_class_v2
*/

body = $response.body.replace(/\"pay_type\":\d/g, "\"pay_type\":1")
$done({body});
