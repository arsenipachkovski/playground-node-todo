// const MongoClient = require('mongodb').MongoClient; // DESTRUCTURING
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoBD server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59e3343331e301c1e42c33d9')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Fail', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:', count)
    // }, (err) => {
    //     console.log('Fail', err);
    // });

    db.collection('Users').find({
        name: 'Amine'
    }).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2))
    });

    // db.close();
});