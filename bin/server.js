var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error("error parsing your .babelrc");
    console.error(err);
}

require('@babel/register')(config);
require('../server');



