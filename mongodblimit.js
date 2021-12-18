const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    dbo.collection('users').find().limit(4).toArray(function (err, res) {
        if (err) throw err;
        console.log('Get first 4 records');
        console.log('-----------------------------------------------');
        console.log(res);
        db.close();
    })
})