module.exports = function(req, res, next){
    /* serving 404 */
    if (!res.writableEnded){
        console.log('[@serve404] sending 404')
        res.statusCode = 404;
        res.end()
    }
    return next()
}

