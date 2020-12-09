const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  mobile: {
    type: String,
    required: false
  },
  address_two: {
    type: String,
    required: false
  },
  address_one: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  pin_code: {
    type: String,
    required: false
  },
  create_date: {
    type: Date,
    default: Date.now,
    index: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  is_varified: {
    type: Boolean,
    default: false
  },
});

const Users = mongoose.model('Company', UserSchema);

module.exports = Users;
