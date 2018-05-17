define(function(require) {
    'use strict';

    var Vue = require('vue');
    var dropdownTemplate = require('text!./dropdown.tpl');
    var utils = require('utils');

    return Vue.component('c-dropdown', {
        template: dropdownTemplate,
        props: [
            'value',
            'menu',
            'width',
            'align',
            'placeholder'
        ],
        data: function() {
            return {
                menuShow: false
            }
        },
        computed: {
            currentVal: function () {
                var str = '';
                var index = utils.findIndex(this.value, 'key', this.menu);

                index > -1 ? str = this.menu[index].value : str = '请选择'
                return str;
            },
            reusStyle: function () {
                var str = '';

                if (this.align) str += 'text-align:' + this.align + ';';
                if (this.width)  str += 'width:' + this.width + 'px;';
                return str;
            },
            iconStyle: function () {
                return this.menuShow ? 'icon-downcircle' : 'icon-upcircle';
            }
        },
        methods: {
            toggle: function() {
                this.menuShow = !this.menuShow;
            },
            selectItem: function (item) {
                this.$emit('input', item.key);
                this.$emit('change', item);
                this.menuShow = false;
            }
        }
    });
});