var fs = require('fs')
var calculator = require('./calculator')

var stream = fs.createReadStream('./calculator.csv', { encoding :'utf8', highWaterMark : 1 * 1024 })
var resultStream = fs.createWriteStream('./result-stream.txt', 'utf8');

var lastIncompleteLine = ''

function processLine(line){
     var fields = line.split(','),
        operation = fields[0],
        x = parseInt(fields[1]),
        y = parseInt(fields[2]);
    console.log(fields)
    var result = calculator[operation](x,y)
    resultStream.write(result + "\n")
}

stream.on('data', function(chunk){
    chunk = lastIncompleteLine + chunk
    var lines = chunk.split("\n")
    var totalLines = lines.length
    var lastLine = lines[lines.length-1]
    if (lastLine.indexOf("\n") === -1){
        lastIncompleteLine = lastLine
        totalLines--
    } else {
        lastIncompleteLine = ''
    }
    for (var idx=0; idx < totalLines; idx++){
         var line = lines[idx]
         processLine(line)
    }
})
stream.on('end', function(){
    processLine(lastIncompleteLine)
    resultStream.close()
})