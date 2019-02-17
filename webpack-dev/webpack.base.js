let path = require('path');
let HtmlWebapckPlugin = require('html-webpack-plugin'); // 自动生成html
let CleanWebpackPlugin = require('clean-webpack-plugin'); // 打包前清空指定目录
let CopyWebpackplugin = require('copy-webpack-plugin');
let webpack = require('webpack');

// happypack 多线程打包
/**
 * 
 */

module.exports = {
    entry: {
        home: './src/index.js',
    },
    module: {
        // noParse: /jquery/, //不去解析指定模块的依赖库
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/, 排除指定目录
                // include: path.resolve('src'), 只查找指定目录下文件
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
        /**
         * libray: 'name' // 打包后输出全局变量名
         * librayTarget: 'var' // 输出方式 commonjs umd var this ...
         */
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
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new webpack.NamedModulesPlugin(), // 打印更新的模块的路径
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
    },
    optimization: { // 优化项
        /**
         * 抽离公共模块
         * slitChunks: {
         *  cacheGroups: { // 缓存组
         *      common: { 
         *          chunks: 'initial', //
         *          minSize: 0, // 文件超过指定大小开始抽离
         *          minChunks: 2, // 被引用指定次开始抽离
         *      },
         *      vendor: { // 第三方组
         *          priority: 1, 抽离优先级
         *          test: /node_modules/,
         *          chunks: 'initial', //
         *          minSize: 0, // 文件超过指定大小开始抽离
         *          minChunks: 2
         *      }
         *  }
         * }
         */
    }
}