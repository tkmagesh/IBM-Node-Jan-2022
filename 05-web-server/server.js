
var http = require('http'),
    fs = require('fs'),
    path = require('path');

var server = http.createServer(function(req, res){
   console.log(req.method, req.url)
   var resourceName = req.url === '/' ? '/index.html' : req.url;
   var resourceRequested = path.join(__dirname, resourceName);
   if (!fs.existsSync(resourceRequested)){
       res.statusCode = 404;
       res.end()
       return
   }
   /* 
   fs.readFile(resourceRequested, function(err, fileContents){
       if (err){
           console.log(err)
           res.statusCode = 500;
           res.end()
           return
       }
       res.write(fileContents)
       res.end()
   })*/
   fs.createReadStream(resourceRequested).pipe(res)
})

server.listen(8080)
server.on('listening', function(){
    console.log('server listening on port - ', 8080)
    console.log('ready to serve resources from : ', __dirname)
})

