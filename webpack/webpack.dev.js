const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true,
        https: false,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});