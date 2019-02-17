let {smart} = require('webpack-merge');
let base = require('./webpack.base');

module.exports = smart(base, {
    mode: 'development',
    devtool: 'source-map'
})