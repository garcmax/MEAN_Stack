var mongo = require('mongodb');

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {
    auto_reconnect: true
});
db = new Db('meandb', server);

db.open(function (err, db) {
    if (!err) {
        console.log("Connected to 'meandb' database");
        db.collection('Books', {
            strict: true
        }, function (err, collection) {
            if (err) {
                console.log("The 'Books' collection doesn't exist. Creating it.");
                throw err;
            }
        });
    }
});


exports.findAll = function (req, res) {
    console.log('findAll');
    db.collection('Books', function (err, collection) {
        collection.find().toArray(function (err, items) {
            res.send(items);
        });
    });
};

exports.addBook = function (req, res) {
    var book = req.body;
    console.log(JSON.stringify(req.body));
    db.collection('Books', function (err, collection) {
        collection.insert(book, {
            safe: true
        }, function (err, result) {
            if (err) {
                res.send({
                    'error': 'An error has occured'
                });
            } else {
                console.log('success: ' + JSON.stringify(result));
                res.send(result);
            }
        });
    });
};

exports.findABook = function (req, res) {
    var bookId = req.params.id;
    console.log('pute');
    console.log('Retrieving book: ' + bookId);
    db.collection('Books', function (err, collection) {
        collection.findOne({
            '_id': new BSON.ObjectID(bookId)
        }, function (err, item) {
            res.send(item);
        });
    });
}

exports.updateBook = function (req, res) {
    var id = req.params.id
    var book = req.body[0];
    console.log('updating book: ' + id);
    console.log(JSON.stringify(book));
    db.collection('Books', function (err, collection) {
        collection.save({
            '_id': new BSON.ObjectID(id),
            'author': book.author,
            'title': book.title,
            'year': book.year,
            'genre': book.genre
        }, function (err, result) {
            if (err) {
                console.log('Error updating book: ' + err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(book);
            }
        });
    });
};

exports.deleteBook = function (req, res) {
    var id = req.params.id
    console.log('deleting book: ' + id);
    db.collection('Books', function (err, collection) {
        collection.remove({
            '_id': new BSON.ObjectID(id)
        }, function (err, result) {
            if (err) {
                console.log('Error deleting book: ' + err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(req.body);
            }
        });
    });
}