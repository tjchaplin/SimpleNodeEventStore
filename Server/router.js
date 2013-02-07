module.exports = function(app) {

    //var authenticationRoutes =  require('./authenticationRoutes')(app,passport);

    var AggregateRoot = require('./domain/AggregateRoot');

    app.get('/',function(request, response){
        response.render('index',{title:app.get('name')});
    });
}