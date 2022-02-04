var fs = require('fs')
var calculator = require('./calculator')
var CalculatorParser = require('./calculator-parser');

console.log(calculator);
var resultStream = fs.createWriteStream('./result-stream.txt', 'utf8');
const parser = new CalculatorParser('./calculator.csv');

parser.on('data', ({operation, x, y }) => {
    try {
        const result = calculator[operation](x,y)
        resultStream.write(result + "\n")
    } catch(err){
        console.log(operation, x, y)
    }
});

parser.on('end', () => {
    resultStream.close()
    console.log('Done')
});

