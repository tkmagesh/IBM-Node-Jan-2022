var fs = require('fs')
var calculator = require('./calculator')

try  {
    var fileContents = fs.readFileSync('./calculator.csv', 'utf8')
    var lines = fileContents.split("\n")
    var fd = fs.openSync('./result-sync.txt', 'w+')
    lines.forEach(function(line){
        var fields = line.split(','),
            operation = fields[0],
            x = parseInt(fields[1]),
            y = parseInt(fields[2]),
            result = calculator[operation](x,y)
        fs.writeSync(fd, result + "\n")
    })
    fs.close(fd)
} catch (e){
    console.log(e)
}
