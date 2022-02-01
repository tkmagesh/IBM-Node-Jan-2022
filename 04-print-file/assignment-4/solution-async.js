var fs = require('fs')
var calculator = require('./calculator')


fs.readFile('./calculator.csv', 'utf8', function(err, fileContents){
    if (err){
        console.log(err)
        return
    }
    var lines = fileContents.split("\n")
    if (lines.length === 0){
        console.log('empty data file')
        return
    }
    fs.open('./result-async.txt', 'w+', function(err, fd){
        if (err){
            console.log(err)
            return
        }   
        lines.forEach(function(line, lineIdx){
            var fields = line.split(','),
                operation = fields[0],
                x = parseInt(fields[1]),
                y = parseInt(fields[2]),
                result = calculator[operation](x,y)
            
            fs.write(fd, result + "\n", function(err){
                if (err){
                    console.log(err)
                }
                if (lineIdx + 1 == lines.length){
                    fs.close(fd)
                }
            })
        })
    })
})




