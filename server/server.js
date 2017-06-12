require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const initializeSockets = require('./socket.js');
const Room = require('./models/Room.js');

const dev = require('./dev.js');

const app = express();
let server;

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  dev.webpack(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.post('/room', (req, res) => {
  const roomName = req.body.room;
  return Room.exists(roomName)
    .then((exists) => {
      if (exists) {
        res.status(200).end();
      } else {
        return Room.create(roomName);
      }
    })
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.get('*', (req, res) => {
  res.redirect('/');
});

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
  initializeSockets(server);
}

module.exports = { app, server };
