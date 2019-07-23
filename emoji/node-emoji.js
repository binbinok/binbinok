var emoji = require('node-emoji');
var s = emoji.unemojify('我❤️🍕');
var e = emoji.emojify(s)
console.log(s);
console.log(e);