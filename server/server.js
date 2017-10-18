var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('ok')
});


//////////////////////////////////////POST
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(404).send(e);
    });
});


//////////////////////////////////////GET
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(e) => {
       res.status(404).send(e);
    });
});
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById({_id: id}).then((todo) => {
        if(!todo) {
            return res.send(404).send();
        }
        res.send({todo});
    });
}, (e) => {
    res.status(404).send();
});

//////////////////////////////////////DELETE
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove({_id: id}).then((todo) => {
        if(!todo) {
            return res.send(404).send();
        }
        res.send({todo});
    });
}, (e) => {
    res.status(404).send();
});

//////////////////////////////////////UPDATE
app.put('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findOneAndUpdate({_id: new ObjectID(id)}, {text: "test update"}).then((todo) => {
        if(!todo) {
            return res.send(404).send();
        }
        res.send({todo});
    });
}, (e) => {
    res.status(404).send();
});


app.listen(port, ()=> {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
