var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//getting routes
app.get('/books', routes.findAll);
app.get('/books/:id', routes.findABook);
app.post('/books', routes.addBook);
app.put('/books/:id', routes.updateBook);
app.delete('/books/:id', routes.deleteBook);

//finally launch express server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//
//var db = require('./public/javascripts/meanDatabase.js');
//db.get();