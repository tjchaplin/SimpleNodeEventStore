
module.exports = function(app,express) {

    app.configure(function(){
        app.set('port', process.env.PORT || 3000);
        app.set('view engine', 'dust');
        app.set('views', path.join(__dirname,  '/views'));

        app.use(app.router);

        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({ secret: 'very_unique_secret_string',
            cookie: { maxAge: 1800000 }}));
        app.use(express.static(path.join(__dirname, 'public'), {redirect: false}));
    });

    app.configure('development', function(){
        app.use(express.errorHandler());
    });

}