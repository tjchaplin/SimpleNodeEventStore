
var express = require('express')
    , routes = require('./Server')
    , http = require('http')
    , path = require('path')
    , cons = require('consolidate')
    , dustln = require('dustjs-linkedin')
    ,package = require('./package.json');;

var app = express();

app.engine('dust', cons.dust);

app.root = __dirname;
app.set("name",package.name+" ("+package.version+")");

global.host = 'localhost';

console.log("Package:"+package.name+" app.name:"+app.name);

require('./configuration')(app,express);
require('./server/router')(app,express);


app.listen(app.get('port'), function(){
    console.log("Express server listening on port:"+app.get('port'));
});
