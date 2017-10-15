// const MongoClient = require('mongodb').MongoClient; // DESTRUCTURING
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoBD server');

    // db.collection('Todos').deleteMany({
    //     text: 'Loool'
    // }).then((result) => {
    //     console.log(result)
    // });

    // db.collection('Todos').deleteOne({
    //         text: 'Loool'
    //     }).then((result) => {
    //         console.log(result)
    //     });

    // db.collection('Todos').findOneAndDelete({
    //     text: 'Loool'
    // }).then((result) => {
    //     console.log(result)
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Amine'
    // }).then((result) => {
    //    console.log(result)
    // });

    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('59e3343331e301c1e42c33d9')
    }).then((result) => {
       console.log(result)
    });

    // db.close();
});