const fs = require('fs');

var dir = fs.readdirSync(__dirname, 'utf8');
var lists = dir.filter(name => /^demo/.test(name));
console.log('list', lists);
var files = () => {
    var obj = {};
    lists.forEach(name => {
        obj[name] = `${__dirname}/${name}/${name}.js`
    });
    return obj;
}

module.exports = {
    entry: files(),
    output: {
        path: __dirname + '/build/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /(node_modules|bower_components)/,
            }
        ]
    }
}