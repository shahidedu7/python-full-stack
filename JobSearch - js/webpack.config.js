const path = require('path');
const HTMLWebPlugin = require('html-webpack-plugin');

module.exports = {
    entry : ['babel-polyfill','./src/js/index.js'],
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'js/bundle.js'
    },
    devServer : {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins : [
        new HTMLWebPlugin({
            filename : 'index.html',
            template : './src/index.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : / node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    }
}