// 5. Filtered LS
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];

function isExt(value) {
  var extName = path.extname(value);
  if (extName === '.md') {
    console.log(value);
    return value;
  }
}

function getNumberOfFiles() {
  fs.readdir(dir, function callback(error, list) {
    var ext = path.extname('README.md');
    var filtered = list.filter(isExt);
  });
}

getNumberOfFiles();
