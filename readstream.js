var fs = require('fs')

var readableStream = fs.createReadStream('input.txt')
var data = '';
readableStream.setEncoding('UTF8')
readableStream.on('data', function(chunk){
data+= chunk
})

readableStream.on('end', function(){
console.log(data)
})