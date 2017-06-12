const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  participants: Number,
  created: Date,
  accessed: Date
});

module.exports = mongoose.model('Room', schema);
