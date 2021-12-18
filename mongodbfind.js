const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    dbo.collection('users').findOne({}, function (err, result) {
        if (err) throw err;

        console.log(result)
    });
});