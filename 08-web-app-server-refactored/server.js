var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    calculator = require('./calculator');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json']

function isStatic(resource){
    var resourceExtn = path.extname(resource);
    return staticResExtns.indexOf(resourceExtn) >= 0
}
    
var server = http.createServer(function(req, res){
    //logging
    console.log(req.method, req.url)

    //parsing query string
    var urlObj = new url.URL(req.url, 'http://localhost')
    var queryData = {}
    for (var [key, value] of urlObj.searchParams){
        queryData[key] = value
    };
    
    //serving static resource
    var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
    if (isStatic(resourceName)){
        var resourceRequested = path.join(__dirname, resourceName);
        if (!fs.existsSync(resourceRequested)){
            res.statusCode = 404;
            res.end()
            return
        }
        fs.createReadStream(resourceRequested).pipe(res)
    } else if (resourceName === '/calculator' && req.method === 'GET') {
        /* Serving calculator 'get' requests */
        var op = queryData.op,
            x = parseInt(queryData.n1),
            y = parseInt(queryData.n2),
            result = calculator[op](x,y);
        res.write(result.toString())
        res.end()
    } else if (resourceName === '/calculator' && req.method === 'POST') {
        /* Serving calculator 'post' requests */
        var rawData = ''
        req.on('data', function(chunk){
            rawData += chunk;
        });
        req.on('end', function(){
            /* parsing form data */
            var formData = {}
            var searchParams = new URLSearchParams(rawData)
            for (var [key, value] of searchParams){
                formData[key] = value
            };
            var op = formData.op,
                x = parseInt(formData.n1),
                y = parseInt(formData.n2),
                result = calculator[op](x,y);
            res.write(result.toString())
            res.end()
        })
    } else {
        /* serving 404 */
        res.statusCode = 404;
        res.end()
        return
    }
});

server.listen(8080)
server.on('listening', function(){
    console.log('app server listening on 8080');
});