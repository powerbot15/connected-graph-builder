const path = require('path');

module.exports = {
    entry: './builder/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets : ['@babel/preset-env']
                }
            }
        ]
    }
};