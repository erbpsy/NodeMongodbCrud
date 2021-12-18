const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');

    // sort order : 1 (ascending order), -1 (descending order)
    // Note: 0 throws error
    let sortquery = { UserName: -1 }; // user column/property name and set sort order by using 1 or -1

    dbo.collection('users').find().sort(sortquery).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})
