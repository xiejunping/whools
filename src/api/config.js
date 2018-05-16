define(function() {
    "use strict";

    var debug = true; // true 开发模式  false 上线模式
    var dev = {
        'API_HOST': 'http://www-test.dinoenglish.com', // 一般接口
        'RES_HOST': 'http://res-test.dinoenglish.com', // 图片音频
        'CODE': 0, // 后台状态码

    };
    var prod = {
        'API_HOST': 'http://www.dinoenglish.com',
        'RES_HOST': 'http://res.dinoenglish.com',
        'CODE': 0,
    };
    return debug ? dev : prod;
});