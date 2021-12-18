const mongoClient = require('mongodb').MongoClient;
console.log(mongoClient);
let url = 'mongodb://localhost:27017/firstmongodb';
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('database created')
    db.close();
});