const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../', 'dist'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({inject: true, template: './src/index.html', filename: './index.html'})]
};

module.exports = config;