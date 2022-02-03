var calculator = require('./calculator')

function serveCalculator(req, res, next){
    var resourceName = req.urlObj.pathname;
    if (resourceName === '/calculator' && req.method === 'GET') {
        /* Serving calculator 'get' requests */
        var op = req.queryData.op,
            x = parseInt(req.queryData.n1),
            y = parseInt(req.queryData.n2),
            result = calculator[op](x,y);
        res.write(result.toString())
        res.end()
        return next()
    } else if (resourceName === '/calculator' && req.method === 'POST') {
        /* Serving calculator 'post' requests */
        var formData = req.formData;
        var op = formData.op,
            x = parseInt(formData.n1),
            y = parseInt(formData.n2),
            result = calculator[op](x,y);
        res.write(result.toString())
        res.end()
        return next()
    } else {
        return next()
    }
}

module.exports = serveCalculator;