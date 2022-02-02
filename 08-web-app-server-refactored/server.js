var http = require('http'),
    dataParser = require('./data-parser'),
    serveStatic = require('./serve-static'),
    serve404 = require('./serve-404'),
    serveCalculator = require('./serve-calculator');

    
var server = http.createServer(function(req, res){    
    console.log(req.method, req.url)
    dataParser(req)
    serveStatic(req, res);
    serveCalculator(req, res);
    serve404(res);
});

server.listen(8080)
server.on('listening', function(){
    console.log('app server listening on 8080');
});