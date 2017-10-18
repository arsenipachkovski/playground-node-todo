var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {
mongoose.connect('mongodb://todoappadmin:20081997+@ds040837.mlab.com:40837/todoapp', {
    useMongoClient: true
});
module.exports = {
    mongoose
};