define(function(require) {
    'use strict';
    
    var Vue = require('vue');
    var audio = require('audio');
    var audiogroupTemplate = require('text!./audiogroup.tpl');

    return Vue.component('c-group-audio', {
        template: audiogroupTemplate,
        props: [
            'items',
            'current',
            'playback'
        ],
        methods: {

            getStatus: function () {}
        },
        components: {'c-audio': audio}
    });
});