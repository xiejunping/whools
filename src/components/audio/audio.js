define(function(require) {
    'use strict';

    var Vue = require('vue');
    var audioTemplate = require('text!./audio.html');
    // var utils = require('utils');

    return Vue.component('c-audio', {
        template: audioTemplate,
        props: [
            'idx',
            'src',
            'end',
            'start',
            'sources',
            'autoplay',
        ],
        data: function () {
            return {
                statu: 'playing',
                player: null,
            };
        },
        mounted: function() {
            this.player = this.$refs.audio;

            this.player.addEventListener('playing', function() {

            });
            this.player.addEventListener('pause', function () {

            });
            this.player.addEventListener('ended', function () {

            });
            // 当播放位置改变时
            this.player.addEventListener('timeupdate', function () {
                console.log(this.player.currentTime);
            });
        },
        methods: {
            init: function () {
                this.player.currentTime = this.start;
            }
        }
    });
});