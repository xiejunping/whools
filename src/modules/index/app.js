require(['jquery', 'model', 'vue', 'utils', '../../components/index'], function($, model, Vue, utils, Components) {

    var Dropdown = Components.dropdown;
    var Gap = Components.gap;
    var Speed = Components.speed;
    var Audio = Components.audio;

    $(document).ready(function() {
        var userId = sessionStorage.getItem("userid");
        var unitId = null;

        console.log(userId);



        // model.getWordDetails('primary0000000002,2a5be3b7b6a445b3be277010cedd4ff0', function (data) {
        //     console.log(data);
        // });

        // 菜单模块
        var nav = new Vue({
            el: '#nav',
            data: function () {
                return {
                    message: 'hello vue!',
                    verticalShow: false,
                    gradeList: [],
                    gradeValue: '65AqWrBg3GhGNgmHrQUDMx',
                    unitList: [],
                    unitValue: '',
                    gaps: [{
                        key: 1,
                        value: '无间隔'
                    }, {
                        key: 2,
                        value: '正常'
                    }, {
                        key: 3,
                        value: '长'
                    }, {
                        key: 4,
                        value: '较长'
                    }],
                    gapValue: 1,
                    speeds: [{
                        key: 1,
                        value: '很慢'
                    }, {
                        key: 2,
                        value: '慢速'
                    }, {
                        key: 3,
                        value: '正常'
                    }, {
                        key: 4,
                        value: '快速'
                    }],
                    speedValue: 3
                };
            },
            mounted: function() {
                this.init();
            },
            methods: {
                init: function() {
                    this.getGradeList();
                },
                getGradeList: function () {
                    var _this = this;
                    model.getGradeList(function (data) {
                        if (data.attributes) {
                            _this.gradeList = data.attributes.map(function(item) {
                                return {
                                    key: item.bookId,
                                    value: item.bookName
                                }
                            });
                        }
                    });
                },
                getRectInfo: function () {
                    model.getRectInfo(userId, 'b0e5213a76a34058afa50c65363efxsb', function(data) {
                        console.log(data);
                    });
                },
                getBookListen: function (bookId) {
                    var _this = this;
                    model.getBookListen(bookId, function(data) {
                        console.log(data);

                        if (data.attributes) {
                            var data = data.attributes.listenList;
                            if (data && data.length) {
                                _this.unitValue = data[0].id;
                                _this.unitList = data.map(function (item) {
                                    return {
                                        key: item.id,
                                        value: item.name
                                    }
                                });
                            }
                        }
                    });
                },
                filterGrade: function (key) {
                    var bookId = key.key;
                    console.log(key);
                    this.getBookListen(bookId);
                },
                filterUnit: function (key) {
                    console.log(key);
                },
                back: function () {
                    window.location.href = '/index.html';
                },
                toggle: function () {
                    this.verticalShow = !this.verticalShow;
                }
            },
            components: {
                'c-dropdown': Dropdown,
                'c-gap': Gap,
                'c-speed': Speed
            }
        });

        // 视图区域
        var view = new Vue({
            el: '#view',
            data: function () {
                return {

                };
            },
            components: {
                'c-audio': Audio
            }
        });
    });
});