const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});
const Model = mongoose.model('customers', schema);
// const register = new Model({
//   name: 'Bruno',
//   age: 37,
//   email: 'nunorulz@gmail.com',
//   password: '123456',
// });
// register.save();
module.exports = Model;
