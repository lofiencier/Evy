const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const postcssConfig = path.resolve(__dirname, './postcss.config.js');
let root = __dirname.replace(/\\docs\\\.storybook/,'');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: postcssConfig
                                }
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: postcssConfig
                                }
                            }
                        }
                    ]
                })
            }, {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-react-loader'
            }, {
                test: /\.(gif|png|jpg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: '[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [new ExtractTextPlugin('styles.css')],
    resolve: {
		alias: {
            '@components': `${root}/lib/components`
        }
	}
};
