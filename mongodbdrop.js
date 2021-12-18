const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
dbo.collection('users').drop(function(err,res){
    if(err) throw err;
    console.log(res);
    console.log('------------------------------');
    console.log('collection deleted');
    db.close();

})

})