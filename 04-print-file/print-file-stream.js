var fs = require('fs')

var stream = fs.createReadStream('./sample.txt', { encoding : 'utf8', highWaterMark : 32 * 1024 })
var readCount = 0

stream.on('data', function(chunk){
    readCount++
    console.log(chunk)
})

stream.on('end', function(){
    console.log('Job Done! read counts = ', readCount);
});
stream.on('end', function(){
    console.log('Job Done! read counts = ', readCount);
});
stream.on('end', function(){
    console.log('Job Done! read counts = ', readCount);
});
stream.on('end', function(){
    console.log('Job Done! read counts = ', readCount);
});

stream.on('error', function(err){
    console.log("Error : ", err.message)
}) 


//using the 'pipe' method
/* 
var readCount = 0;
stream.on('data', function(){
    ++readCount
});

stream.on('end', function(){
    console.log('total reads = ', readCount)
})

stream.pipe(process.stdout) 
*/

//creating a copy
/* copyStream = fs.createWriteStream("sample-copy.txt")
stream.pipe(copyStream) */