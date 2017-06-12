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
      participants: 0,
      created: Date.now()
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

// module.exports.addUser = (roomName) => (
//   new Promise((res, rej) => {
//     Room.findOneAndUpdate({ name: roomName }, { $set: { participants: (entry[0].participants + 1) } }, { new: true }, (err, results) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(results);
//       }
//     });
//   })
// );
