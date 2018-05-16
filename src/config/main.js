require.config({
    baseUrl: '/src',
    shims: {
        'model': {
            deps: ['http', 'config'],
            exports: 'model'
        },
        'handle': {
            exports: 'handle'
        }
    },
    paths: {
        'jquery': '/lib/jquery/jquery-3.3.1.min',
        'vue': '/lib/vue/vue.min',
        'text': '/lib/require/text',

        'config': '/api/config',
        'http': '/api/request',
        'model': '/api/model',
        'handle': '/api/handle',

        'utils': '/common/utils',
        
        'dropdown': '/components/dropdown/dropdown',
        'gap': '/components/gap/gap',
        'speed': '/components/speed/speed',
        'audio': '/components/audio/audio',
        'audiogroup': '/audiogroup/audiogroup/audiogroup',
    },
    urlArgs: 'v=' + (new Date()).getTime()
});

(function() {
    var paths = window.location.pathname.split('/');
    var entry = paths && paths.length && paths[paths.length - 2];

    require(['/modules/' + entry + '/app.js']);
})(window);

