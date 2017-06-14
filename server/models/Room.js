const db = require('../../db/index.js');
const Room = require('../../db/Room.js');

module.exports.exists = roomName => (
  new Promise((res, rej) => {
    Room.find({ name: roomName }, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  })
    .then((results) => {
      let exists = false;
      if (results.length > 0) {
        exists = true;
      }
      return exists;
    })
);

module.exports.create = roomName => (
  new Promise((res, rej) => {
    const newRoom = {
      room: roomName,
      participants: 0
    };
    Room.create(newRoom, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  })
);

module.exports.addSong = (roomName, videoId) => (
  new Promise((res, rej) => {
    Room.findOneAndUpdate({ name: roomName }, { $push: { songs: videoId }, accessed: Date.now() }, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  })
);

module.exports.addUser = (roomName) => (
  new Promise((res, rej) => {
    Room.findOneAndUpdate({ name: roomName }, { $inc: { participants: 1 }, accessed: Date.now() }, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  })
);

module.exports.removeUser = (roomName) => (
  new Promise((res, rej) => {
    Room.findOneAndUpdate({ name: roomName }, { $inc: { participants: -1 } }, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  })
);
