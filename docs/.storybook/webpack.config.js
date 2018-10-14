const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const postcssConfig = path.resolve(__dirname, './postcss.config.js');
// const glob = require('glob');
// const PurifyCSSPlugin = require('purifycss-webpack');
let rootPath = __dirname.replace(/\\docs\\\.storybook/,'');
module.exports = {
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader',
                include:path.resolve(rootPath,'lib/'),
                exclude:path.resolve(__dirname,'../node_modules/')
            },
            {
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
            },{
                test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
                exclude: path.resolve(__dirname, 'node_modules/'),
                use: [{
                    loader:'file-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, 'app/*.html')),
        // })
    ],
    resolve: {
		alias: {
            '@components': `${rootPath}/components`
        }
	}
};
