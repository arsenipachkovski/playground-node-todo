const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


User.findById('59e722ed2d0164c5f732e640').then((user) => {
   if(!user) {
       return console.log('Cannot find user')
   }
   console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log("Error", e);
});