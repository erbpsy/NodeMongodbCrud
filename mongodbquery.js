const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    let query = { Gender: 'Male' };
    dbo.collection('users').find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    })

});