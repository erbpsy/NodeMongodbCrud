const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;

    let dbo = db.db('firstmongodb');
    let updatequery = { Gender: 'female' };
    let updateto = { $set: { Gender: 'Female' } };
    dbo.collection('users').updateOne(updatequery, updateto, function (err, res) {
        if (err) throw err;

        console.log('updated matching record/first record in case of multiple records available');
        console.log('-----------------------------------------');
        console.log(res);
        db.close();
    })
})