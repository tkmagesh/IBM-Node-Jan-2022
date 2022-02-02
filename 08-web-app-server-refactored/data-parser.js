var url = require('url')

function dataParser(req, res, next){
    var urlObj = new url.URL(req.url, 'http://localhost')
    var queryData = {}
    for (var [key, value] of urlObj.searchParams){
        queryData[key] = value
    }
    req['urlObj'] = urlObj;
    req['queryData'] = queryData;
    next()
}

module.exports = dataParser;

