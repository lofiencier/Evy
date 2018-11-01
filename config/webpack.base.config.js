/**
 * @author: houzhitao
 * @since: 2018-05-30 10:24
 */

const path = require('path');
const loader = require('./loader');

//基本配置
module.exports = {
    cache: true,
    devtool: false,
    resolve: {
        modules: [
            path.resolve('node_modules')
        ],
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    resolveLoader: {
        modules: [
            path.resolve('node_modules')
        ]
    },
    module: {
        rules: [
            loader.css(),
            loader.less(),
            loader.cssModules(),
            loader.lessModules(),
            loader.babel(),
            loader.images(),
            loader.fonts(),
            loader.medias()
        ]
    },
    externals: {

    },
    // target: 'web'
};


