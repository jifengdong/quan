/*
密小助解锁VIP，恋爱话语
https:\/\/apic\.yzhiyin\.com\/index\.php\/v4\/new\/duihua\/list
*/

body = $response.body.replace(/\"is_open\":\d/g, "\"is_open\":1")
$done({body});