module.exports = function(req, res, next){
    var start = new Date();
    res.on('finish', function(){
        var end = new Date();
        var elapsed = end - start;
        console.log(req.method + "\t" + req.url + "\t" + res.statusCode + "\t" + elapsed)
    })
    
    return next()
}