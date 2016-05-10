// 3. My First I/O
var fs = require('fs');

var path = process.argv[2];
var buffer = fs.readFileSync(path);
var string = buffer.toString();
var split = string.split('\n');
console.log(split.length-1);

/*
var total = 0;
for (let i = 0; i < split.length; i++) {
  total += i;
}
*/
