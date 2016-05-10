// 4. My First Async I/O
var fs = require('fs');
var total = undefined;
var file = process.argv[2];

function numberOfLines() {
  fs.readFile(file, function getLines(error, fileContents) {
    var string = fileContents.toString();
    var split = string.split('\n');
    var totalLines = split.length;
    console.log(totalLines - 1);
  });
}

numberOfLines();
