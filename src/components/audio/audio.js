define(function (require) {
    'use strict';

    var Vue = require('vue');
    var audioTemplate = require('text!./audio.tpl');
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
            'playback'
        ],
        data: function () {
            return {
                statu: '',
                player: null,
            };
        },
        mounted: function () {
            this.player = this.$refs.audio;
            this.player.playbackRate = this.playback;
            this.init();
        },
        methods: {
            init: function () {
                var _this = this;
                // 监听事件
                this.player.addEventListener('playing', function () {
                    _this.statu = 'playing';
                    _this.$emit('change', _this.statu);
                });
                this.player.addEventListener('pause', function () {
                    _this.statu = 'pause';
                    _this.$emit('change', _this.statu);
                });
                this.player.addEventListener('ended', function () {
                    _this.statu = 'ended';
                    _this.$emit('change', _this.statu);
                });
                // 当播放位置改变时
                this.player.addEventListener('timeupdate', function () {
                    _this.heart();
                });
            },
            heart: function () {
                this.player.currentTime > parseFloat(this.end) && this.player.pause();
            },
            play: function () {
                this.player.currentTime = parseFloat(this.start);
                this.player.play();
            }
        },
        watch: {
            playback: function (newVal) {
                this.player.playbackRate = newVal;
            }
        }
    });
});