let path = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: path.resolve('node_modules')
        }),
        require("postcss-global-import")(),
        require("precss")(),
        require('autoprefixer')({
            browsers: [
                'last 4 versions',
                'ie >= 9',
                'iOS >= 7',
                'Android >= 4'
            ]
        })
    ]
};
