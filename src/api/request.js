define(function(require) {
    "use strict";

    var config = require('config');
    var $ = require('jquery');

    // 原型模式+构造函数模式
    function Http(option) {
        var reg = new RegExp(/^((https|http)?:\/\/)[^\s]+/);

        this.url = reg.test(option.url) || option.json ? option.url : config.API_HOST + option.url;
        this.method = option.method || 'GET';
        this.data = option.data;
        this.header = option.header || {};
        this.dataType = option.dataType || 'json';
        this.contentType = option.contentType || 'application/x-www-form-urlencoded';
        this.traditional = option.traditional || false;
        this.timeout = option.timeout;
        this.success = option.success;
    }

    Http.prototype.loadHandle = function() {
        // 请求开始

        // 设置请求头
    }

    Http.prototype.errorHandle = function() {

    }

    Http.prototype.completeHandle = function() {
        // 请求结束
    }

    Http.prototype.req = function() {
        $.ajax({
            type: this.method,
            url: this.url,
            data: this.data,
            contentType: this.contentType,
            dataType: this.dataType,
            traditional: this.traditional,
            timeout: this.timeout,
            beforeSend: this.loadHandle,
            success: this.success,
            error: this.errorHandle,
            complete: this.completeHandle
        });
    }
    return Http;
});