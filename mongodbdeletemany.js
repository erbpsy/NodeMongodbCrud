const mongoClient=require('mongodb').MongoClient;
let url='mongodb://localhost:27017/';
mongoClient.connect(url, function(err,db){
let dbo=db.db('firstmongodb');
let deletemanyquery={Gender:'Male'};
dbo.collection('users').deleteMany(deletemanyquery,function(err,res){
    if(err) throw err;
console.log('matching all the records are deleted from mongodb collection');
console.log('------------------------------------------------------------');
console.log(res);
db.close();

})

})