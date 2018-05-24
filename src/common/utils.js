define({
    getQueryString: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var str = window.location.search.substr(1).match(reg);
        if (str !== null) {
            return decodeURI(str[2]);
        }
        return null;
    },
    trim: function(str) {
        if (String.prototype.trim) {
            return str === null ? '' : String.prototype.trim.call(str);
        } else {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        }
    },
    trimAll: function(str) {
        return str.replace(/\s*/g, '')
    },
    findIndex: function(id, feild, arr) {
        var index = -1;
        var tem = [];

        if (id && feild && arr && arr.length) {
            arr.forEach(function (t) {
                tem.push(t[feild]);
            });
            index = tem.indexOf(id);
        }
        return index;
    },
    randomArr: function(arr) {
        return arr.sort(function() {
            return (0.5 - Math.random());
        });
    }
});