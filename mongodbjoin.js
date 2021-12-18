const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('firstmongodb');

    // create orders collection 
    dbo.createCollection('orders', function (err, res) {
        if (err) throw err;
        console.log('orders  collection created..')
        console.log(res);
    })

    // created order object to insert into oerders collection
    let order = { OrderId: 1, OrderNumber: 1, OrderDate: new Date(), ProductId: 'P1' };

    //insert order into orders collection
    dbo.collection('orders').insertOne(order, function (err, res) {
        if (err) throw err;
        console.log('order record inserted');
        console.log(res);
    });


    // create products collection
    dbo.createCollection('products', function (err, res) {
        if (err) throw err;
        console.log('products collection  created..')
        console.log(res);
    });

    // creates product objects to insert into products collection
    let products = [
        { ProductId: 'P1', ProductName: 'purse', ProductDetails: 'purse is one of the main carrying object' },
        { ProductId: 'P2', ProductName: 'mobile', ProductDetails: 'mobile is one of the main carrying object' },
        { ProductId: 'P3', ProductName: 'watch', ProductDetails: 'watch is one of the main carrying object' },
        { ProductId: 'P4', ProductName: 'bag', ProductDetails: 'bag is one of the main carrying object' },
        { ProductId: 'P5', ProductName: 'laptop', ProductDetails: 'laptop is one of the main carrying object' },
        { ProductId: 'P6', ProductName: 'car', ProductDetails: 'car is one of the main carrying object' },
        { ProductId: 'P7', ProductName: 'bike', ProductDetails: 'bike is one of the main carrying object' },

    ];

    // insert product objects into projects collection
    dbo.collection('products').insertMany(products, function (err, res) {
        if (err) throw err;
        console.log('All products are inserted..')
        console.log(res);
    });

    // join orders and products data based on productid (i.e. common collumn in both collections)
    dbo.collection('orders').aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'ProductId',
                foreignField: 'ProductId',
                as: 'OrderDetails'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();

    })

})