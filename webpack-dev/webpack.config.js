let path = require('path');
let HtmlWebapckPlugin = require('html-webpack-plugin'); // 自动生成html
let CleanWebpackPlugin = require('clean-webpack-plugin'); // 打包前清空指定目录
let CopyWebpackplugin = require('copy-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        home: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // devtool: 'source-map', // 开发工具 映射文件
    // watch 直接监控文件变化
    /**
     * watch: true
     * watchOptions: {
     *  poll: 1000, // 每1少检查一次
     *  aggregateTimeout: 500 // 防抖, 停止操作500毫秒后更新
     *  ignored: /node_modules/ // 过滤文件夹
     * }
     */
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin('./dist'),
        new CopyWebpackplugin([
            {from: 'doc', to: './'}
        ]),
        new webpack.BannerPlugin('make banner 2019'),
        new webpack.DefinePlugin({ // 设置环境变量
            DEV: 'DEV'
        })
    ],
    resolve: { // 解析 第三方包 common
        modules: [path.resolve('node_modules')],
        mainFields: ['style', 'main'],
        // extensions: [], // 引用文件扩展名查询规则
        // mainFields: [] // 入口文件名
        // alias: {
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}