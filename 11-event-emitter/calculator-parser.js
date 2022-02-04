const fs = require('fs');
const { EventEmitter } = require('events');

class CalculatorParser extends EventEmitter {
    
    _lastIncompleteLine = '';

    constructor(dataFile){
        super()
        const stream = fs.createReadStream(dataFile, { encoding :'utf8', highWaterMark : 1 * 1024 })
        stream.on('data', chunk => this.onStreamData(chunk))
        stream.on('end', () => this.onStreamEnd())
    }

    onStreamEnd(){
        this.parseLine(this._lastIncompleteLine)
        this.emit('end')
    }
    
    onStreamData(chunk){
        const data = this._lastIncompleteLine + chunk
        var lines = data.split("\n")
        var totalLines = lines.length
        var lastLine = lines[lines.length-1]
        if (lastLine.indexOf("\n") === -1){
            this._lastIncompleteLine = lastLine
            totalLines--
        } else {
            this._lastIncompleteLine = ''
        }
        for (var idx=0; idx < totalLines; idx++){
            var line = lines[idx]
            this.parseLine(line)
        }
    }

    parseLine(line){
        const dataObj = {}
        const fields = line.split(',');
        dataObj.operation = fields[0];
        dataObj.x = parseInt(fields[1]);
        dataObj.y = parseInt(fields[2])
        this.emit('data', dataObj)
    }

}

module.exports = CalculatorParser;