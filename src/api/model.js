define(function(require) {
    'use strict';

    var Http = require('http');
    var config = require('config');
    var handle = require('handle');

    return {
        // 获取年级
        getGradeList: function (callback) {
            var model = new Http({
                url: 'http://www.easy-mock.com/mock/5a09b8a87b68855a07f7842d/agent/grade',
                contentType: 'application/json',
                success: function (data) {
                    if (data && data.code === config.CODE) {
                        callback(data);
                    } else {
                        handle.unSuccess(data.msg);
                    }
                }
            });
            model.req();
        },
        // 获取书本单元
        getBookListen: function (id, callback) {
            var model = new Http({
                url: '/phone/moduleListen/list',
                data: {
                    'bookId': id
                },
                success: function(data) {
                    if (data.success && data.code === config.CODE) {
                        callback(data);
                    } else if (data.success) {
                        console.log(data.code);
                    } else {
                        handle.unSuccess(data.msg);
                    }
                }
            });
            model.req();
        },
        // 获取单词点读音频
        getWordDetails: function (wordIds, callback) {
            var model = new Http({
                url: '/phone/v2/remember/word/getDetails',
                data: {
                    'wordIds': wordIds
                },
                success: function (data) {
                    if (data.success && data.code === config.CODE) {
                        callback(data);
                    } else if (data.success) {
                        console.log(data.code);
                    } else {
                        handle.unSuccess(data.msg);
                    }
                }
            });
            model.req();
        },
        // 获取页面定位元素
        getRectInfo: function (userId, resourceId, callback) {
            var model = new Http({
                url: '/phone/moduleListen/getRectInfo',
                data: {
                    'puserId': userId,
                    'resourceId': resourceId
                },
                success: function (data) {
                    if (data.success && data.code === config.CODE) {
                        callback(data);
                    } else if (data.success) {
                        console.log(data.code);
                    } else {
                        handle.unSuccess(data.msg);
                    }
                }
            });
            model.req();
        }
    };
});