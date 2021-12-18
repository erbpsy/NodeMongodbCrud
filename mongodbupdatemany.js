const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');
    let updatequery = { Gender: 'Male' };
    let updateto = { $set: { Gender: 'female', UserName:  'UserName_updated' } };
    dbo.collection('users').updateMany(updatequery, updateto, function (err, res) {
        if (err) throw err;
        console.log('updated all matching records for Gender and UserName');
        console.log('-----------------------------------');
        console.log(res);
        db.close();
    })
})