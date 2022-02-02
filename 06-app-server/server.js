var http = require('http'),
    url = require('url'),
    calculator = require('./calculator');

var server = http.createServer(function(req, res){
    var urlObj = new url.URL(req.url, 'http://localhost')
    var resourceName = urlObj.pathname
    var queryObj = {}
    for (var [key, value] of urlObj.searchParams){
        queryObj[key] = value
    };
    console.log(queryObj)
    if (resourceName === '/calculator'){
        var op = queryObj.op,
            x = parseInt(queryObj.n1),
            y = parseInt(queryObj.n2),
            result = calculator[op](x,y);
        res.write(result.toString())
        res.end()
    } else {
        res.statusCode = 404;
        return
    }


});

server.listen(9090)
server.on('listening', function(){
    console.log('app server listening on 9090');
});

/* 
    http://localhost:9090/calculator?op=add&n1=100&n2=200  => 300
    http://localhost:9090/calculator?op=subtract&n1=100&n2=200 => -100
    http://localhost:9090/calculator?op=multiply&n1=100&n2=200 => 20000
    http://localhost:9090/calculator?op=divide&n1=100&n2=200 => 0.5
*/