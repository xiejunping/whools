define(function(require) {
    'use strict';

    var Vue = require('vue');
    var speedTemplate = require('text!./speed.tpl');
    var utils = require('utils');

    return Vue.component('c-speed', {
        template: speedTemplate,
        props: [
            'value',
            'speeds'
        ],
        data: function () {
            return {
                showSpeed: false
            };
        },
        computed: {
            currentVal: function () {
                var str = '';
                var index = utils.findIndex(this.value, 'key', this.speeds);

                index > -1 ? str = this.speeds[index].value : str = '请选择';
                return str;
            },
            iconStyle: function () {
                return this.showSpeed ? 'icon-caretdown' : 'icon-caretup'
            }
        },
        methods: {
            toggle: function () {
                this.showSpeed = !this.showSpeed;
            },
            selectItem: function (item) {
                this.$emit('input', item.key);
                this.$emit('change', item);
                this.showSpeed = false;
            }
        }
    });
});