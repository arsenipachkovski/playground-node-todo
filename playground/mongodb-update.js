// const MongoClient = require('mongodb').MongoClient; // DESTRUCTURING
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoBD server');

    // db.collection('Todos').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     $returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59e337de31e301c1e42c34d5')
    }, {
        $set: {
            location: '21 Boulevard de la fontaine'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    // db.collection('Todos').findOneAndUpdate({
    //
    // })

    // db.close();
});