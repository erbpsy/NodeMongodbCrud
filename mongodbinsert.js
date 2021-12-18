const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    console.log('connected.............')
    if (err) throw err;

    let dbo = db.db('firstmongodb');
    console.log('dbo created');
    let user={UserName:'BhanuPratap', Gender:'Male',DateOfBirth:'31/12/1991', Education:'B.Tech (Information Technology)',Experience:'8 years'}
    dbo.collection('users').insertOne(user, function (err, res) {
        console.log('insertone function called')
        if(err) throw err;
        console.log('new user inserted into users collection');
        db.close();
    });

});