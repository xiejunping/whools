define(function(require) {
    'use strict';

    var Vue = require('vue');
    var gapTemplate = require('text!./gap.tpl');
    var utils = require('utils');

    return Vue.component('c-gap', {
        template: gapTemplate,
        props: [
            'value',
            'gaps'
        ],
        data: function () {
            return {
                showGap: false
            };
        },
        computed: {
            currentVal: function () {
                var str = '';
                var index = utils.findIndex(this.value, 'key', this.gaps);
                index > -1 ? str = this.gaps[index].value : str = '请选择';
                return str;
            },
            iconStyle: function () {
                return this.showGap ? 'icon-caretdown' : 'icon-caretup';
            }
        },
        methods: {
            toggle: function () {
                this.showGap = !this.showGap;
            },
            selectItem: function (item) {
                this.$emit('input', item.key);
                this.$emit('change', item);
                this.showGap = false;
            }
        }
    });
});