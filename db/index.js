const mongoose = require('mongoose');

const uriString = process.env.MONGOLAB_URI || 'mongodb://localhost/yousing';

mongoose.connect(uriString, (err) => {
  if (err) {
    console.log ('ERROR connecting to: ' + uriString + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uriString);
  }
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;