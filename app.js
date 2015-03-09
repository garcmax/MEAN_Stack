var express = require('express');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('combined'))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cookieParser());
app.use(session({
  genid: function(req) {
    return genuuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat'
}))

// development only
if ('development' == app.get('env')) {
    app.use(errorhandler())
}

//getting routes
app.get('/books', jsonParser, routes.findAll);
app.get('/books/:id', jsonParser, routes.findABook);
app.post('/books', jsonParser, routes.addBook);
app.put('/books/:id', jsonParser, routes.updateBook);
app.delete('/books/:id', jsonParser, routes.deleteBook);

//finally launch express server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//
//var db = require('./public/javascripts/meanDatabase.js');
//db.get()
