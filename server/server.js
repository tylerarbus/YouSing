require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dev = require('./dev.js');

const app = express();
let server;

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  dev.webpack(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('*', (req, res) => {
  res.redirect('/');
});

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
}

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('videoSelect', (videoId) => {
    socket.broadcast.emit('videoSelect', videoId);
  });

  socket.on('videoPlay', (play) => {
    socket.broadcast.emit('videoPlay', play);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

module.exports = { app };
