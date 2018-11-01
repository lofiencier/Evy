/**
 * @author: houzhitao
 * @since: 2018-05-30 10:51
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let webpackDevConfig = {
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: path.resolve(__dirname, '../components/app.js')
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'js/[name].js',
        // chunkFilename: 'js/[name].js'
    },
    plugins: [
       //  new webpack.ProvidePlugin({
       //
       // }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: '万师傅平台',
            inject: true,
            hash: true,
            cache: true,
            template: './config/static/index.html',
            favicon: './config/static/favicon.ico'
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].css',
        //     chunkFilename: 'css/[name].css'
        // })
    ],
    devServer: {
        compress: true,
        port: 9000,
        // host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true,
        open: true
    }
};

module.exports = merge(baseWebpackConfig, webpackDevConfig);