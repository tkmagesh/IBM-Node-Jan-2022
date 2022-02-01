var fs = require('fs')

try {
    var fileContents = fs.readFileSync('./sample.txt', 'utf8')
    console.log(fileContents)
} catch (e){
    console.log('Error:', e.message)
}

console.log('Job Done!')

