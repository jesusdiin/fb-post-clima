var htmlConvert = require('html-convert');
var fs = require('fs');

var convert = htmlConvert();

    // convert a website url

convert('http://lamaschingona.com.mx')
    .pipe(fs.createWriteStream('./out.png'));