
var express = require('express')
    , routes = require('./Server')
    , http = require('http')
    , path = require('path')
    , dust = require('dust');

var app = express();

app.engine('dust', dust);
app.root = __dirname;
global.host = 'localhost';

app.get('/', routes.index);

require('Configuration')(app,express);
require('./server/router')(app,express);


app.listen(app.port, function(){
    console.log("Express server listening on port:"+app.port);
});

//http.createServer(app).listen(app.get('port'), function(){
//  console.log("Express server listening on port " + app.get('port'));
//});
