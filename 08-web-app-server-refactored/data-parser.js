var url = require('url')

function dataParser(req, res, next){
    var urlObj = new url.URL(req.url, 'http://localhost')
    var queryData = {}
    for (var [key, value] of urlObj.searchParams){
        queryData[key] = value
    }
    req['urlObj'] = urlObj;
    req['queryData'] = queryData;
    var rawData = ''
    req.on('data', function(chunk){
        rawData += chunk
    })
    req.on('end', function(){
        var formData = {}
        var searchParams = new URLSearchParams(rawData)
        for (var [key, value] of searchParams){
            formData[key] = value
        };
        req['formData'] = formData
        next()
    });
}

module.exports = dataParser;

