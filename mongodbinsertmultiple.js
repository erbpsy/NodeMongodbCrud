const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) throw err
    let dbo = db.db('firstmongodb');
    let users = [
        { UserName: 'firstuser', Gender: 'Male', DateOfBirth: '3/1/2001', Education: 'B.Tech (Civil Engineering)', Experience: '2 years' },
        { UserName: 'seconduser', Gender: 'female', DateOfBirth: '1/12/1999', Education: 'B.Tech (Mechanical Engineering)', Experience: '3 years' },
        { UserName: 'thirduser', Gender: 'Female', DateOfBirth: '10/10/2010', Education: 'B.Tech (Electrical Engineering)', Experience: '1 year' },
        { UserName: 'fourthuser', Gender: 'Male', DateOfBirth: '1/11/2020', Education: 'B.Tech (Computer Science)', Experience: '1 year' },
    ];
    dbo.collection('users').insertMany(users, function (err, res) {
        if (err) throw err;
        console.log('multiple users are inserted into users collection');
    });
})