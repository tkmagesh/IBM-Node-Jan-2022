var path = require('path'),
    fs = require('fs');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];

function isStatic(resource){
    var resourceExtn = path.extname(resource);
    return staticResExtns.indexOf(resourceExtn) >= 0;
}

function serveStatic(req, res, next){
    var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
    if (isStatic(resourceName)){
        var resourceRequested = path.join(__dirname, resourceName);
        if (!fs.existsSync(resourceRequested)){
            return next();
        }
        //fs.createReadStream(resourceRequested).pipe(res)
        var stream = fs.createReadStream(resourceRequested);
        stream.pipe(res)
        stream.on('end', function(){
            return next();
        })
    } else {
        return next();
    }
    
}

module.exports = serveStatic;