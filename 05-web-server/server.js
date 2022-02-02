var http = require('http')

var server = http.createServer(function(req, res){
    console.log(req.url)
    res.write("Welcome to node.js")
    res.end()
})

server.listen(8080)
server.on('listening', function(){
    console.log('server listening on port - ', 8080)
})

