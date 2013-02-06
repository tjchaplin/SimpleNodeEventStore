module.exports = function(app) {

    //var authenticationRoutes =  require('./authenticationRoutes')(app,passport);

    app.get('/',function(request, response){
        response.render('index',{title:'A Title'});
    });
}