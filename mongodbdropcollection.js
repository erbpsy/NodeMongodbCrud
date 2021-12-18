const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    dbo.dropCollection('users', function (err, res) {
        if (err) throw err;
        console.log('user collection dropped/deleted');
        console.log('-------------------------------');
        console.log(res);
        db.close();
    })


});