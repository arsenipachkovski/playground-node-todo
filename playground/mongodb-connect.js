// const MongoClient = require('mongodb').MongoClient; // DESTRUCTURING
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoBD server');

    // db.collection('Users').insertOne({
    //     name: 'Arséni',
    //     age: 20,
    //     location: '16 rue de molsheim'
    //     }, (err, result) => {
    //         if(err) {
    //             return console.log('Unable to insert user', err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    db.close();
});