var fs = require('fs')

fs.readFile('./sample.txt', 'utf8', function(err, fileContents){
    if (err) {
        console.log('Error:', err.message)
    } else {
        console.log(fileContents)
    }
}) // => async

console.log('Job Done!')