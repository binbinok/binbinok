const fs = require('fs');

var refuel = fs.readFile('../info/refuel.json', 'utf8', (err, data) => {
    console.log(data);

});
