const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    let deletequery = { Gender: 'female' };
    dbo.collection('users').deleteOne(deletequery, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log('--------------------------');
        console.log('matching records are deleted.')
    })
})