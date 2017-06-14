const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  participants: Number,
  songs: [],
  created: { type: Date, default: Date.now },
  accessed: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', schema);
