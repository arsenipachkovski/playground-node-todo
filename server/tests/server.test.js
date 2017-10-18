const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First todo'
}, {
    _id: new ObjectID(),
    text: 'Second todo'
}, {
    _id: new ObjectID(),
    text: 'Third todo'
}];

beforeEach((done) => {
   Todo.remove({}).then(() => {
       return Todo.insertMany(todos);
   }).then(() => done());
});

describe('POST /todos', () => {
   it('should create a new todo', (done) => {
       var text = 'My todo :)';
       request(app)
           .post('/todos')
           .send({text})
           .expect(200)
           .expect((res) => {
            expect(res.body.text).toBe(text);
           })
           .end((err, res) => {
            if(err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => {
               expect(todos.length).toBe(1);
               expect(todos[0].text).toBe(text);
               done();
            }).catch((e) => { done(e) });
           })
   });

   it('should not create todo with invalid body data', (done) => {
      request(app)
          .post('/todos')
          .send({})
          .expect(404)
          .end((err, res) => {
            if(err) {
                return done(err);
            }
              Todo.find().then((todos) => {
                  expect(todos.length).toBe(3);
                  done();
              }).catch((e) => {
                return done(e)
              });
          })
   });
});

describe('GET /todos', () => {
   it('should get all todos', (done) => {
       request(app)
           .get('/todos')
           .send()
           .expect(200)
           .expect((res) => {
           expect(res.body.todos.length).toBe(3);
           })
           .end(done);
   })
});

describe('/GET /todos/:id', () => {
    it('should send invalid object', (done) => {
        request(app)
            .get(`/todos/abcdef`)
            .expect(404)
            .end(done);
    });
    it('should send an not found', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done);
    });
    it('should find a todo', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });
});