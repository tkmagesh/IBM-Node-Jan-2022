var http = require('http'),
    path = require('path'),
    dataParser = require('./data-parser'),
    serveStatic = require('./serve-static'), //factory
    serveCalculator = require('./serve-calculator'),
    serve404 = require('./serve-404'),
    logger = require('./logger'),
    app = require('./app');

app.use(logger);
app.use(dataParser);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveCalculator);
app.use(serve404);

var server = http.createServer(app);

server.listen(8080)
server.on('listening', function(){
    console.log('app server listening on 8080');
});