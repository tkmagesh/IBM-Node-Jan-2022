var chalk = require('chalk')

module.exports = function(req, res, next){
    var start = new Date();
    res.on('finish', function(){
        var end = new Date();
        var elapsed = end - start;
        console.log(chalk.blue(req.method) + "\t" + chalk.red(req.url) + "\t" + chalk.yellow(res.statusCode) + "\t" + elapsed)
    })
    
    return next()
}