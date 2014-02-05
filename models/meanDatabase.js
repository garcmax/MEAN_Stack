// Inclusion de Mongoose
var mongoose = require('mongoose');

// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
/*mongoose.connect('mongodb://localhost:27017/meandb', function (err) {
    if (err) {
        throw err;
    } else {
        console.log("connected !");
    }
});*/

exports.heroSchema = new mongoose.Schema({
    name: String,
    role: String,
    sex: String
});

//var heroModel = mongoose.model('heros', heroSchema);

/*var myHero = new heroModel();
myHero.name = 'Maxou';
myHero.role = 'support';
myHero.sex = 'male';

myHero.save(function (err) {
    if (err) {
        throw err;
    }
    console.log('hero saved !');
    mongoose.connection.close();
});*/

/*module.exports = {
    get: function get() {
        mongoose.connect('mongodb://localhost:27017/meandb', function (err) {
            if (err) {
                throw err;
            } else {
                console.log("connected !");
            }
        });
        heroModel.find(null, function (err, heros) {
            if (err) {
                throw err;
            }
            // comms est un tableau de hash
            console.log(heros);
            mongoose.connection.close();
        });
    }
};*/